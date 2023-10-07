import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ventas',
    loadChildren: () => import('./modules/ventas/ventas.module').then(m => m.VentasModule)
  },
  {
    path: '',
    redirectTo: 'ventas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'ventas',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
