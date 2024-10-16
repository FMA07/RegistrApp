import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProfPage } from './tab-prof.page';

const routes: Routes = [
  {
    path: '',
    component: TabProfPage,
    children: [
      {
        path: 'crear-codigo-qr',
        loadChildren: () => import('./../../paginasProfes/crear-codigo-qr/crear-codigo-qr.module').then( m => m.CrearCodigoQRPageModule)
      },
      {
        path: 'crear-clase',
        loadChildren: () => import('./../../paginasProfes/crear-clase/crear-clase.module').then( m => m.CrearClasePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProfPageRoutingModule {}
