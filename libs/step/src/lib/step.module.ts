import {
  Injectable,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  ROUTES,
  Routes,
} from '@angular/router';
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

    if (internalRoutes.length > 0) {
      internalRoutes.push({
        path: '**',
        component: routes.steps[0].component,
        canActivate: [RedirectGuard],
        pathMatch: 'full',
      });
    }

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

@Injectable({
  providedIn: 'root',
})
class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.router.navigateByUrl(state.url + '/0', {
      skipLocationChange: true,
    });
    return false;
  }
}
