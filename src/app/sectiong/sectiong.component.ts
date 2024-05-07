import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sectiong',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sectiong.component.html',
  styleUrl: './sectiong.component.css'
})
export class SectiongComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
       name: new FormControl("",[Validators.required]),
       Relationship: new FormControl("",[Validators.required]),
       mobile: new FormControl("",[Validators.required]),
       Email: new FormControl("",[Validators.required]),
      

    })
  }

}
