import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarQrComponentComponent } from './mostrar-qr-component/mostrar-qr-component.component';
import { PerfilAlumnoComponentComponent } from './perfil-alumno-component/perfil-alumno-component.component';
import { PerfilProfesorComponentComponent } from './perfil-profesor-component/perfil-profesor-component.component';
import { ReglamentoComponentComponent} from './reglamento-component/reglamento-component.component';
import { ScanQrComponentComponent } from './scan-qr-component/scan-qr-component.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, MostrarQrComponentComponent,
    PerfilAlumnoComponentComponent,
    PerfilProfesorComponentComponent,
    ReglamentoComponentComponent,
    ScanQrComponentComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

