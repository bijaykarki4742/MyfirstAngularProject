import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { title } from 'process';

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
      title: new FormControl(""),
      gender: new FormControl(""),
      dateofBirth: new FormControl(""),
      fullName: new FormControl(""),
      lastName: new FormControl(""),
      firstName: new FormControl(""),
      nric: new FormControl(""),
      maritalStatus: new FormControl(""),
      completedBaclelorDegree: new FormControl(""),
      malaysian: new FormControl(""),
      ethnicity: new FormControl(""),
      validMalaysiianVisa: new FormControl(""),
      countryOfCitizen: new FormControl(""),
      embassyForSev: new FormControl(""),
      visaExpireDate: new FormControl(""),
      passportExpireDate: new FormControl(""),
      homePhone: new FormControl(""),
      mobile: new FormControl(""),
      email: new FormControl(""),
      correspondenceAddress: new FormControl(""),
      town: new FormControl(""),
      postcode: new FormControl(""),
      state: new FormControl(""),
      country: new FormControl(""),
      permanentAddress: new FormControl(""),
      permanentTown: new FormControl(""),
      permanentPostcode: new FormControl(""),
      permanentState: new FormControl(""),
      permanentCountry: new FormControl(""),
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
