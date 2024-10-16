import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(private router: Router, private alertController: AlertController) { }

  segmentChanged($event:any){
    console.log($event.detail.value);
    let direction =$event.detail.value
    this.router.navigate(['home/'+direction])
  }

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

  cerrarSesion(){

  }
}
