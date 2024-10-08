import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarQrComponentComponent } from './mostrar-qr-component.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@NgModule({
  declarations: [MostrarQrComponentComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MostrarQrComponentComponent // Configura la ruta para cargar este componente
      }
    ])
  ],
  exports: [MostrarQrComponentComponent]
})
export class MostrarQrComponentModule { }
