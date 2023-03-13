import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stepper-stepper-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>stepper-sidebar works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperSidebarComponent {}
