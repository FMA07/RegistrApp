import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), 
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'tab-prof',
    loadChildren: () => import('./paginasProfes/tab-prof/tab-prof.module').then( m => m.TabProfPageModule)
  },
  {
    path: 'tab-alumnos',
    loadChildren: () => import('./paginasAlumnos/tab-alumnos/tab-alumnos.module').then( m => m.TabAlumnosPageModule)
  },
  {
    path: '**', //ESTE CODIGO SIEMPRE DEBE IR AL FINAL. DE LO CONTRARIO, LAS PÁGINAS QUE ESTÉN DEBAJO NO CARGAN!!!!!
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
