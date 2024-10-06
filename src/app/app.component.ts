import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

interface MenuPage {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPagesAlumno: MenuPage[] = [
    { title: 'Reglamento', url: '/reglamento', icon: 'document-text' },
    { title: 'Escanear QR', url: '/qr-code', icon: 'qr-code' },
    { title: 'Perfil', url: '/perfil-alumno', icon: 'person' }
  ];

  public appPagesProfesor: MenuPage[] = [
    { title: 'Reglamento', url: '/reglamento', icon: 'document-text' },
    { title: 'Mostrar QR', url: '/mostrar-qr', icon: 'qr-code' },
    { title: 'Perfil', url: '/perfil-profesor', icon: 'person' }
  ];

  public selectedPages: MenuPage[] = []; // Ahora está definido correctamente como un array de objetos de tipo MenuPage

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadMenu(); // Cargar el menú al iniciar la app
  }

  loadMenu() {
    const userRole = this.authService.getRole(); // Obtener el rol del usuario desde AuthService
    if (userRole === 'alumno') {
      this.selectedPages = this.appPagesAlumno; // Mostrar componentes para alumnos
    } else if (userRole === 'profesor') {
      this.selectedPages = this.appPagesProfesor; // Mostrar componentes para profesores
    }
  }
}
