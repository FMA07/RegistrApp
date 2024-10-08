import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'reglamento',
        loadChildren: () => import('../reglamento-component/reglamento-component.module').then(m => m.ReglamentoComponentModule)
      },
      {
        path: 'mostrar-qr',
        loadChildren: () => import('../mostrar-qr-component/mostrar-qr-component.module').then(m => m.MostrarQrComponentModule)
      },
      {
        path: 'perfil-alumno',
        loadChildren: () => import('../perfil-alumno-component/perfil-alumno-component.module').then(m => m.PerfilAlumnoComponentModule)
      },
      {
        path: '',
        redirectTo: '/tabs/reglamento',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
