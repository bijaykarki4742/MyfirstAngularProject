import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-sectionb',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule],
  templateUrl: './sectionb.component.html',
  styleUrl: './sectionb.component.css'
})
export class SectionbComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
       intakeMonth: new FormControl(""),
       intakeYear: new FormControl(""),
       programme: new FormControl(""),
       specialisation: new FormControl(""),
       applying: new FormControl(""),
       firstExtension: new FormControl(""),
       secondExtension:new FormControl(""),
       firstMinor:new FormControl(""),
       secondMinor:new FormControl(""),
       secondMajor:new FormControl(""),
       recognitionOfPriorLearning:new FormControl(""),
       modeOfCandidature: new FormControl("")
      
    })
  }
}
