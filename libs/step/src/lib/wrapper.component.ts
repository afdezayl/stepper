import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { STEP_MANAGER_TOKEN } from './step.module';
import { StepManager } from './step-manager';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div>
    <h2>Title</h2>
    <ul *ngIf="manager.routes | async as routes">
      <li *ngFor="let step of routes.steps; let i = index">
        <a [routerLink]="'' + i" [skipLocationChange]="true">{{
          step.title
        }}</a>
      </li>
    </ul>
    <div>
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        border: 1px solid #999;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {
  constructor(@Inject(STEP_MANAGER_TOKEN) public manager: StepManager) {}
}
