import {
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ROUTES, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { StepManager } from './step-manager';

export const STEP_MANAGER_TOKEN = new InjectionToken<StepManager>('STEP_TOKEN');

export interface StepRoutes {
  steps: Step[];
}

export interface Step {
  title: string;
  component: Type<any>;
}
@NgModule({
  imports: [CommonModule],
})
export class StepModule {
  static forRoot(routes: StepRoutes): ModuleWithProviders<StepModule> {
    const internalRoutes: Routes = routes.steps.map((s, i) => ({
      path: `${i}`,
      component: s.component,
    }));

    return {
      ngModule: StepModule,
      providers: [
        {
          provide: ROUTES,
          useValue: [
            {
              path: '',
              component: WrapperComponent,
              children: internalRoutes,
            },
          ],
        },
        {
          provide: STEP_MANAGER_TOKEN,
          useFactory: (router: Router) => new StepManager(router, routes),
          deps: [Router],
        },
      ],
    };
  }
}
