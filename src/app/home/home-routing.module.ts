import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MostrarQrComponentComponent } from '../mostrar-qr-component/mostrar-qr-component.component';
import { PerfilAlumnoComponentComponent } from '../perfil-alumno-component/perfil-alumno-component.component';
import { PerfilProfesorComponentComponent } from '../perfil-profesor-component/perfil-profesor-component.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'mostrar-qr',
        component: MostrarQrComponentComponent
      },
      {
        path: 'perfil-alumno',
        component:  PerfilAlumnoComponentComponent
      },
      {
        path: 'perfil-profesor',
        component: PerfilProfesorComponentComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
