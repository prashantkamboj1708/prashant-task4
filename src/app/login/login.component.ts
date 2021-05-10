import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../models/Employee';
import { AuthService } from '../services/auth.service';
import { EmpserviceService } from '../services/empservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:any
  public password:any


  public employeeId:any
  public emailId:any
  public emppass:any
  isDisplay=false;
  toggleDisplay(){
    this.isDisplay=!this.isDisplay;
  }
  constructor(
    private authservice:AuthService,
    private router : Router,
    private app : AppComponent,
    private empservice : EmpserviceService
    ) { 
    if(localStorage.getItem('currentUser')){
      this.router.navigateByUrl('/adminhome')
    }
  }

  ngOnInit(): void {
  }

  login(){
    if(this.isDisplay){
      if(this.authservice.login(this.email,this.password))
      {
        this.router.navigateByUrl('/adminhome')
        this.app.isLogin=true;
        this.app.isAdmin = true;
      }else{
        alert("Login Failed");
        this.router.navigateByUrl('')
      }
    }else{
      this.authservice.loginEmp(this.employeeId,this.emailId,this.emppass).then((value)=>{
        if(value){
          this.router.navigateByUrl('/emphome')
          this.app.isLogin=true;
          this.app.isAdmin = false;
          this.app.employee = value;
        }else{
          alert("Login Failed");
          this.router.navigateByUrl('')
        }
      })
    }
  }

}
