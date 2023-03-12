import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STEP_MANAGER_TOKEN, StepManager } from '@stepper/step';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>step-d works!</p>
    <div>
      <button (click)="stepper.next()">Next</button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepDComponent {
  constructor(@Inject(STEP_MANAGER_TOKEN) public stepper: StepManager) {}
}
