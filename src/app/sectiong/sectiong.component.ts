import { CommonModule } from '@angular/common';
import {Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ApiServiceService} from "../api-service.service";

@Component({
  selector: 'app-sectiong',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sectiong.component.html',
  styleUrl: './sectiong.component.css'
})
export class SectiongComponent {
  userForm: FormGroup;
  private service:ApiServiceService = inject(ApiServiceService);
  constructor() {
    this.userForm = new FormGroup({
       name: new FormControl("",[Validators.required]),
       Relationship: new FormControl("",[Validators.required]),
       mobile: new FormControl("",[Validators.required]),
       Email: new FormControl("",[Validators.required]),
    })
    this.initForm()
  }
  initForm(){

    this.userForm.patchValue({
      name:this.service.Value.name,
      Relationship:this.service.Value.Relationship,
      mobile:this.service.Value.mobile,
      Email:this.service.Value.Email,
    })
  }
}
