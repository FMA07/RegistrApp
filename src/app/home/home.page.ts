import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state && state['user']) {
      this.username = state['user'];
    } else {
      this.username = history.state.user;
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
}
