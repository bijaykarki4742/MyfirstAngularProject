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
     date:this.service.Value.date,
    fullName:this.service.Value.fullName,
     surName:this.service.Value.surName,
     firstName:this.service.Value.firstName,
     Phone:this.service.Value.Phone,
     PassportNo:this.service.Value.PassportNo,
     Mobile:this.service.Value.Mobile,
     Email:this.service.Value.Email,
     visa:this.service.Value.visa,
     citizenship:this.service.Value.citizenship,
     embassy:this.service.Value.embassy,
     visadate:this.service.Value.visadate,
     passportdate:this.service.Value.passportdate,
     address:this.service.Value.address,
     town:this.service.Value.town,
     postcode:this.service.Value.postcode,
     state:this.service.Value.state,
     country:this.service.Value.country,
     homeaddress:this.service.Value.homeaddress,
     town1:this.service.Value.town1,
     postcode1:this.service.Value.postcode1,
     state1:this.service.Value.state1,
     country1:this.service.Value.country1,
   })
  }
}
