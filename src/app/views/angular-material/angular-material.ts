import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-angular-material',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatSlideToggle],
  templateUrl: './angular-material.html',
  styleUrl: './angular-material.css',
})
export class AngularMaterial {

}
