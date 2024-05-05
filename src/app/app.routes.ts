import { Routes } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { SectionaComponent } from './sectiona/sectiona.component';
import { SectiondComponent } from './sectiond/sectiond.component';
import { SectioneComponent } from './sectione/sectione.component';
import { SectionfComponent } from './sectionf/sectionf.component';
import { SectiongComponent } from './sectiong/sectiong.component';
import { SectionhComponent } from './sectionh/sectionh.component';
import { SectioniComponent } from './sectioni/sectioni.component';
import { SectionbComponent } from './sectionb/sectionb.component';
import { SectioncComponent } from './sectionc/sectionc.component';

export const routes: Routes = [
    { path: 'instruction', component: InstructionComponent },
    { path: 'sectiona', component: SectionaComponent},
    { path: 'sectionb', component: SectionbComponent},
    { path: 'sectionc', component: SectioncComponent},
    { path: 'sectiond', component: SectiondComponent},
    { path: 'sectione', component: SectioneComponent},
    { path: 'sectionf', component: SectionfComponent},
    { path: 'sectiong', component: SectiongComponent},
    { path: 'sectionh', component: SectionhComponent},
    { path: 'sectioni', component: SectioniComponent},

];
