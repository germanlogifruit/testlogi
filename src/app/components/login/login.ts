import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestLogifruit } from '../../services/request-logifruit';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';





@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButton],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = {
    username: '',
    password: ''
  }

  enviarFormulario() {
    console.log('Datos enviados:', this.usuario);
  }

  public constructor (
    public request: RequestLogifruit,
    private router: Router,
    private auth: AuthService
  ){} 

  public getResponse(): void { 
    this.request.login(this.usuario).subscribe(
      {
        next: (response) =>  {
          console.log(response)
          // Guardamos la info de autenticación
          this.auth.setAuthInfo(response); // si response es AuthInfo

          // Redirigimos a la zona privada
          this.router.navigate(['/privado/home'])
        },
        error: (error) => {
          console.log(error.error.message)
        }
      }
    )
  }

  public getAut(): void {
    this.request.aut().subscribe({
          next: (response) =>  {
          console.log(response)
        },
        error: (error) => {
          console.log(error.error.message)
        }
    })
  }



}
