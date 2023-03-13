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
    <ul class="link-container" *ngIf="manager.routes | async as routes">
      <li *ngFor="let step of routes.steps; let i = index">
        <a
          class="link"
          [routerLink]="'' + i"
          [skipLocationChange]="true"
          routerLinkActive="link-active"
        ></a>
        <span>{{ step.title }}</span>
        <router-outlet name="sidebar"></router-outlet>
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
        background-color: #eee;
      }

      ul.link-container {
        counter-reset: links;
      }

      .link::before {
        counter-increment: links;
        content: counter(links);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border: 1px solid;
        border-radius: 50%;
        background-color: #7171fd;
      }

      .link {
        text-decoration: none;
        color: #eee;
        margin-right: 0.5em;
      }

      .link-active {

      }

      .link-active::before {
        background-color: #f35a3c;
        color: white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {
  constructor(@Inject(STEP_MANAGER_TOKEN) public manager: StepManager) {}
}
