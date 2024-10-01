import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { QrCodeComponentComponent } from '../qr-code-component/qr-code-component.component';
import { DocenteComponentComponent } from '../docente-component/docente-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    children:[
      {
        path:'qr-code-component',
        component: QrCodeComponentComponent
      },
      {
        path:'docente-component',
        component: DocenteComponentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
