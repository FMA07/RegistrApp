import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras , Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:any={
    Usuario:"",
    Password:""
  }

  private token = 'tokenFalso123'

  field:string="";

  constructor(public toastController: ToastController, private router:Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000,
        position: 'top'
      }
    );
    toast.present();
  }

  validateModel(model:any){
    for(var [key, value] of Object.entries(model)){
      if (value=="") {
        this.field=key;
        return false;
      }
    }
    return true;
  }
  
  validarLargoUsuario(dato: string){
    if(dato.length>=3 && dato.length<=8){
      return true
    }
    return false;
  }

  validarLargoPass(dato: string){
    if(dato.length>=8){
      return true
    }
    return false;
  }

  iniciarSesion(){
    if(this.validateModel(this.login)){
      if(this.validarLargoUsuario(this.login.Usuario)){
        if(this.validarLargoPass(this.login.Password)){
          this.presentToast("Bienvenido "+ this.login.Usuario);
          this.authService.storeToken(this.token);
          let navigationExtras:NavigationExtras={
            state: {user:this.login.Usuario}
          }
          this.router.navigate(['home'], navigationExtras);
        }else{
          this.presentToast("La contraseña debe ser de largo 8");
          this.login.Password="";
          let navigationExtras: NavigationExtras={
            state:{password: this.login.Password}
          }
        }
      }else{
        this.presentToast("El largo del usuario debe ser entre 3 y 8 carácteres");
        this.login.Usuario="";
      }
    }else{
      this.presentToast("Falta: "+ this.field);
    }
  }
}
