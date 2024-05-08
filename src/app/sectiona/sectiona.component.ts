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
      visa: new FormControl(""),
      citizenship: new FormControl(""),
      embassy: new FormControl(""),
      visadate: new FormControl(""),
      passportdate: new FormControl(""),
      address: new FormControl(""),
      town: new FormControl(""),
      postcode: new FormControl(""),
      state: new FormControl(""),
      country: new FormControl(""),
      homeaddress: new FormControl(""),
      town1: new FormControl(""),
      postcode1: new FormControl(""),
      state1: new FormControl(""),
      country1: new FormControl(""),


   })
   this.initForm();
  }
  
  initForm(){

   this.userForm.patchValue({
    fullName:this.service.Value.fullName
   })
  }
}
