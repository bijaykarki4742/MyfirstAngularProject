import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sectiona',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sectiona.component.html',
  styleUrl: './sectiona.component.css'
})
export class SectionaComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
       date: new FormControl("",[Validators.required]),
       fullName: new FormControl("",[Validators.required]),
       surName: new FormControl("",[Validators.required]),
       firstName: new FormControl("",[Validators.required]),
       phone: new FormControl("",[Validators.required]),
       PassportNo: new FormControl("",[Validators.required]),
       mobile: new FormControl("",[Validators.required]),
       Email: new FormControl("",[Validators.required]),
      

    })
  }
  
}
