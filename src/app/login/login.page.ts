import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras , Router} from '@angular/router';
import { AuthService } from '../auth.service'; // Importa el AuthService
import { Observable } from 'rxjs'; // Esto es importante

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

  private token = 'tokenFalso123'; // El token falso sigue siendo el mismo
  private role: string = ''; // Variable para almacenar el rol

  field:string="";

  constructor(public toastController: ToastController, private router:Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000,
      position: 'top'
    });
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
    return dato.length >= 3 && dato.length <= 8;
  }

  validarLargoPass(dato: string){
    return dato.length >= 8;
  }

  iniciarSesion() {
    if (this.validateModel(this.login)) {
      if (this.validarLargoUsuario(this.login.Usuario)) {
        if (this.validarLargoPass(this.login.Password)) {
          this.authService.login(this.login.Usuario, this.login.Password).subscribe(success => {
            if (success) {
              this.presentToast("Bienvenido " + this.login.Usuario);
              this.router.navigate(['home']);
            } else {
              this.presentToast("Credenciales incorrectas.");
            }
          }, error => {
            console.error("Error al iniciar sesión", error); // Log del error en la consola
            this.presentToast("Hubo un problema al iniciar sesión."); // Mensaje de error al usuario
          });
        } else {
          this.presentToast("La contraseña debe ser de largo 8.");
        }
      } else {
        this.presentToast("El largo del usuario debe ser entre 3 y 8 caracteres.");
      }
    } else {
      this.presentToast("Falta: " + this.field);
    }
  }
}
