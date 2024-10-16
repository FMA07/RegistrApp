import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' /* Esto sirve para que lo escrito en Authservice aparezca en cualquier página de la app*/
})
export class AuthService {

  private authTokenKey='authToken';

  constructor() { }

  storeToken(token: string):void{
    const encodedToken = btoa(token); /*Esto codifica el token en base64*/
    localStorage.setItem(this.authTokenKey, encodedToken); /*Esto guarda el token en localStorage*/
  }

  isAuthenticated():boolean{ /*chequea si el usuario fue autenticado*/
    const token = localStorage.getItem(this.authTokenKey); /*recibe el token de localStorage*/
    return !!token;/*esto da falso si el valor del token es nulo y verdadero si es un string*/
  }

  removeToken():void{
    localStorage.removeItem(this.authTokenKey)
  }
}
