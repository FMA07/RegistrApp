import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras , Router} from '@angular/router';


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

  field:string="";

  constructor(public toastController: ToastController, private router:Router) { }

  ngOnInit() {
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
  
  validarLargoUsuario(dato: String){
    if(dato.length>=3 && dato.length<=8){
      return true
  }
    return false;
  }

  validarLargoPass(dato: String){
    if(dato.length>=8){
      return true
    } 
    return false;
  }


  IiniciarSesion(){
    if(this.validateModel(this.login)){
      if(this.validarLargoUsuario(this.login.Usuario)){
        if(this.validarLargoPass(this.login.Password)){
          this.presentToast("Bienvenido" + this.login.Usuario);
          let navigationExtra:NavigationExtras={
            state: {user:this.login.Usuario}
          }
          this.router.navigate(['home'],navigationExtra);
        }else{
          this.presentToast("La contraseña debe ser de largo de 8");
          this.login.Password="";
        }
      }else{
        this.presentToast("El largo del usuario deber ser entre 3 y 8 caracteres");
        this.login.Usuario=""; 
      }
    }
    else{
      this.presentToast("Falta: " +this.field);
    }
  }


async presentToast(message:string, duration?: number){
  const toast = await this.toastController.create(
    {
      message:message,
      duration:duration?duration:2000
    }

  );
  toast.present();
}
}