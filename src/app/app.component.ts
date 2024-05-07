import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { SectionaComponent } from './sectiona/sectiona.component';
import { SectiondComponent } from './sectiond/sectiond.component';
import { SectioneComponent } from './sectione/sectione.component';
import { SectionfComponent } from './sectionf/sectionf.component';
import { SectiongComponent } from './sectiong/sectiong.component';
import { SectionhComponent } from './sectionh/sectionh.component';
import { SectioniComponent } from './sectioni/sectioni.component';
import {SectionbComponent} from "./sectionb/sectionb.component";
import {SectioncComponent} from "./sectionc/sectionc.component";

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, InstructionComponent, SectionaComponent, SectionbComponent, SectioncComponent, SectiondComponent, SectioneComponent, SectionfComponent, SectiongComponent, SectionhComponent, SectioniComponent, SectionbComponent],
=======
  imports: [RouterOutlet, InstructionComponent,
    SectionaComponent,SectionbComponent,
    SectioncComponent ,SectiondComponent,
    SectioneComponent, SectionfComponent,
    SectiongComponent, SectionhComponent,
    SectioniComponent, SectionbComponent],
>>>>>>> 77b6344b38cfb2fd8d8a8f01a07e53cf6e4ea3aa
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'applicationform';

  ngOnInit(): void {
    console.log('')
    //call the method
  }

  getDateFormService(){
    //call the service

    //console the json data
  }

}
