import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

// Componentes
import { PerfilProfesorComponentComponent } from './perfil-profesor-component/perfil-profesor-component.component';
import { ScanQrComponentComponent } from './scan-qr-component/scan-qr-component.component';

// Módulos de componentes
import { PerfilAlumnoComponentModule } from './perfil-alumno-component/perfil-alumno-component.module';
import { MostrarQrComponentModule } from './mostrar-qr-component/mostrar-qr-component.module';
import { ReglamentoComponentModule } from './reglamento-component/reglamento-component.module';

@NgModule({
  declarations: [
    AppComponent,
    PerfilProfesorComponentComponent,
    ScanQrComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // Módulos de componentes
    PerfilAlumnoComponentModule,
    MostrarQrComponentModule,
    ReglamentoComponentModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
