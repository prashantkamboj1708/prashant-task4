import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingapp';
  isLogin = false;
  isAdmin = true;
  employee : Employee;
  constructor(private route : Router){
    if(localStorage.getItem('currentUser')){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
  ngOnChanges(){
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.isLogin=false;
    this.route.navigateByUrl('/login');
  }
  
}


