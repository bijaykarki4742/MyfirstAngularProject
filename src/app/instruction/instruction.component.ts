import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.css'
})
export class InstructionComponent {
   userForm: FormGroup;

   constructor() {
     this.userForm = new FormGroup({
        studentID: new FormControl(""),
         code: new FormControl("")
     })
   }
}
