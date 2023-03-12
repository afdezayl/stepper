import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepModule, StepRoutes } from '@stepper/step';
import { StepCComponent } from './step-c.component';
import { StepEComponent } from './step-e.component';

const routes: StepRoutes = {
  steps: [
    { title: 'E', component: StepEComponent },
    { title: 'C', component: StepCComponent },
  ],
};

@NgModule({
  declarations: [],
  imports: [CommonModule, StepModule.forRoot(routes)],
})
export class Example2Module {}
