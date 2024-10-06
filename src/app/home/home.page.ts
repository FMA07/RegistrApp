import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate(500)]),
      transition('* => void', [animate(300)])
    ])
  ]
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(private router: Router, private alertController: AlertController, private userService: UserService, private authService: AuthService) {
    this.router.navigate(['home/perfil-profesor']);
  }

  segmentChanged($event: any) {
    console.log($event.detail.value);
    let direction = $event.detail.value;
    this.router.navigate(['home/' + direction]);
  }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      // Si no está autenticado, redirige al login
      this.router.navigate(['login']);
    }
  }

  async registerAttendance() {
    const alert = await this.alertController.create({
      header: 'Asistencia Registrada',
      message: 'Tu asistencia ha sido registrada con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async cerrarSesion() {
    this.userService.clearUser(); // Elimina el usuario del servicio
    await this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
}
