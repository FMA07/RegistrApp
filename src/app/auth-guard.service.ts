import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private AuthService: AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean | UrlTree 
  {
    if(this.AuthService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }  
  }
}
