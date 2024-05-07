import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sectiona',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sectiona.component.html',
  styleUrl: './sectiona.component.css'
})
export class SectionaComponent {
  userForm: FormGroup;
  private service:ApiServiceService = inject(ApiServiceService);

  constructor() {
    this.userForm = new FormGroup({
      date: new FormControl("",[Validators.required]),
      fullName: new FormControl("",[Validators.required]),
      surName: new FormControl("",[Validators.required]),
      firstName: new FormControl("",[Validators.required]),
      Phone: new FormControl("",[Validators.required]),
      PassportNo: new FormControl("",[Validators.required]),
      Mobile: new FormControl("",[Validators.required]),
      Email: new FormControl("",[Validators.required]),
   })
   this.initForm();
  }
  
  initForm(){

   this.userForm.patchValue({
    fullName:this.service.Value.fullName
   })
  }
}
