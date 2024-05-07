import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sectioni',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './sectioni.component.html',
  styleUrl: './sectioni.component.css'
})
export class SectioniComponent {

  isChecked= false;
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
       name: new FormControl("",[Validators.required]),
       date: new FormControl("",[Validators.required]),
    
    })
  }
}
