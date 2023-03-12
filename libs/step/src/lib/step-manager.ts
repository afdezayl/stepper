import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StepRoutes } from './step.module';

export class StepManager {
  private _router: Router;
  private _routes: BehaviorSubject<StepRoutes>;

  get routes() {
    return this._routes.asObservable();
  }

  constructor(router: Router, routes: StepRoutes) {
    this._router = router;
    this._routes = new BehaviorSubject(routes);
  }

  next() {
    const routes = this._routes.value;
    const path = this.getCurrentPath();
    const pathIndex = this.getCurrentIndex();
    const nextIndex = Math.min(routes.steps.length - 1, pathIndex + 1);
    const regex = new RegExp(`/${path}$`);

    this._router.navigateByUrl(
      this._router.url.replace(regex, `/${nextIndex}`),
      {
        skipLocationChange: true,
      }
    );
  }

  private getCurrentPath() {
    const currentUrl = this._router.url;
    return currentUrl.split('/').slice(-1)[0];
  }

  private getCurrentIndex() {
    const path = this.getCurrentPath();
    return parseInt(path);
  }
}
