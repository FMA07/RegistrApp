import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  UsuarioDeLogin: string="";
  UsuarioComparativo: string="";
  Password: string="";

  constructor(public alertaContrasenna: AlertController, private router: Router) { }

  ngOnInit(){
    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state && state['user']){
      this.UsuarioDeLogin = state['user']
    }

    if (state && state['password']){
      this.Password = state['password'];
      
    }else{
      this.Password = history.state.password;
    }
  }

  validarUsuario(dato = this.UsuarioComparativo){
    if(dato == this.UsuarioDeLogin){
      this.presentarAlerta();
      return true
    }
    return false;
  }

  async presentarAlerta(){
    const alerta = await this.alertaContrasenna.create({
      header: 'Su contraseña es:',
      message: this.Password,
      buttons: ['OK']
    });

    await alerta.present();
  }
}
