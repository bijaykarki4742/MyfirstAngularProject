import { CommonModule } from '@angular/common';
import {Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ApiServiceService} from "../api-service.service";

@Component({
  selector: 'app-sectionh',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sectionh.component.html',
  styleUrl: './sectionh.component.css'
})
export class SectionhComponent {
  userForm: FormGroup;

  private service:ApiServiceService = inject(ApiServiceService);
  constructor() {
    this.userForm = new FormGroup({
       Name: new FormControl("",[Validators.required]),
       relationship: new FormControl("",[Validators.required]),
       Mobile: new FormControl("",[Validators.required]),
       email: new FormControl("",[Validators.required]),
       Occupation: new FormControl("",[Validators.required]),
       PassportNo: new FormControl("",[Validators.required])
    })
    this.initForm()
  }
  initForm(){

    this.userForm.patchValue({
      Name:this.service.Value.Name,
      relationship:this.service.Value.relationship,
      Mobile:this.service.Value.Mobile,
      email:this.service.Value.email,
      Occupation:this.service.Value.Occupation,
      PassportNo:this.service.Value.PassportNo,
    })
  }
}
