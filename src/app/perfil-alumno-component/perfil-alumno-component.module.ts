import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponentComponent } from './perfil-alumno-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerfilAlumnoComponentComponent
      }
    ])
  ],
  declarations: [PerfilAlumnoComponentComponent]
})
export class PerfilAlumnoComponentModule {}
