import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepModule, StepRoutes } from '@stepper/step';
import { StepAComponent } from './step-a.component';
import { StepBComponent } from './step-b.component';
import { StepCComponent } from './step-c.component';
import { StepDComponent } from './step-d.component';
import { StepperSidebarComponent } from './stepper-sidebar.component';

const routes: StepRoutes = {
  steps: [
    { title: 'A', component: StepAComponent },
    { title: 'B', component: StepBComponent },
    { title: 'C', component: StepCComponent },
    { title: 'D', component: StepDComponent },
  ],
  sidebar: StepperSidebarComponent,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, StepModule.forRoot(routes)],
})
export class Example1Module {}
