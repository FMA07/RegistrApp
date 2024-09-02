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
  
  validarLargoUsuario(dato: String)

}
