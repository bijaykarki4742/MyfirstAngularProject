import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sectionh',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sectionh.component.html',
  styleUrl: './sectionh.component.css'
})
export class SectionhComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
       Name: new FormControl("",[Validators.required]),
       relationship: new FormControl("",[Validators.required]),
       Mobile: new FormControl("",[Validators.required]),
       email: new FormControl("",[Validators.required]),
       Occupation: new FormControl("",[Validators.required]),
       PassportNo: new FormControl("",[Validators.required])
    })
  }
}
