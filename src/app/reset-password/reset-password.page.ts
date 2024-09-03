import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  Usuario: string="";
  Password: string="";

  constructor(private router: Router) { }

  ngOnInit(){
    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state && state['password']){
      this.Password = state['password'];
      
    }else{
      this.Password = history.state.password;
    }
  }

  validarLargoUsuario(dato: string){
    if(dato.length>=3 && dato.length<=8){
      return true
    }
    return false;
  }

  recuperarPass(){
    if(this.validarLargoUsuario(this.Usuario)){}
  }

}
