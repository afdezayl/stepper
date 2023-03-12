import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepManager, STEP_MANAGER_TOKEN } from '@stepper/step';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <p>step-e works!</p>
    <div>
      <button (click)="stepper.next()">Next</button>
    </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepEComponent {
  constructor(@Inject(STEP_MANAGER_TOKEN) public stepper: StepManager) {}
}
