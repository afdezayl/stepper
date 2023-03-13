import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '1',
    loadChildren: () =>
      import('./example-1/example-1.module').then((m) => m.Example1Module),
  },
  {
    path: '2',
    loadChildren: () =>
      import('./example-2/example-2.module').then((m) => m.Example2Module),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
