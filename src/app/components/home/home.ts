import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RequestLogifruit } from '../../services/request-logifruit';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Table } from '../../models/dataTable.interfaces';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MatTableModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    public request: RequestLogifruit, 
    private router: Router,
    private auth: AuthService) {}

  public arrayTable: Table = []; // <- dataSource
  public showTable = false;


  // Define el orden de columnas a mostrar (los nombres deben coincidir con matColumnDef)
  displayedColumns = [
    'fecha',
    'referencia',
    'referenciaDestino',
    'articulo',
    'cantidad',
    'tipoMovimiento',
    'horaCarga',
    'pedido',
    'operadorOrigen',
    'centroOrigen',
    'operadorDestino',
    'centroDestino',
  ];

  // Fechas seleccionadas en el HTML (type="date" -> string 'YYYY-MM-DD')
  public startDate: string = '';
  public endDate: string = '';

  public getTable(): void {
    if (!this.startDate || !this.endDate) {
      console.log('Hay que indicar las fechas en el selector.');
      return;
    }

    // Pasamos de 'YYYY-MM-DD' a Date y luego a 'Thu Nov 06 2025'
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    const startParam = encodeURIComponent(start.toDateString());
    const endParam = encodeURIComponent(end.toDateString());
    const idOperator = this.auth.authInfo?.idOperador?.toString() ?? '';


    this.request.tableParams(startParam, endParam, idOperator).subscribe({
      next: (response: Table) => {
        this.arrayTable = response;
        this.showTable = true;
        console.log(response);
      },
      error: (error) => console.log(error.error.message),
    });
  }

  public getDeslogin(): void { 
    this.request.deslogin().subscribe(
      {
        next: (response) =>  {
          console.log(response)
          this.auth.clearAuthInfo();  // <- limpiamos cliente
          this.router.navigate(['/publico'])
        },
        error: (error) => {
          console.log(error.error.message)
        }
      }
    )
  }

  public hiddenTable(): void {
    this.showTable = !this.showTable;
  }

  ngOnInit() {
  console.log('Ver la info del Auth Service desde Home:', this.auth.authInfo);

  }


}
