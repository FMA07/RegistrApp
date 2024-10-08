import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReglamentoComponentComponent } from './reglamento-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReglamentoComponentComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReglamentoComponentComponent
      }
    ])
  ],
  exports: [ReglamentoComponentComponent]
})
export class ReglamentoComponentModule { }
