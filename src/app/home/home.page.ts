import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';

  constructor(private router:Router){ }

  ngOnInit(){
    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state && state['user']){
      this.username = state['user'];
      
    }else{
      this.username = history.state.user;
    }
  }
}