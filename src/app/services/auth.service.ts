import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../models/Employee';
import { EmpserviceService } from './empservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admins : any= {
    
    "prashant":"prashant123"
  };

  constructor(
    private router:Router,
    private empservice : EmpserviceService,
  ) { }
  login(email:string,password:string){

    if(email && password && this.admins[email] == password)
    { 
      localStorage.setItem('currentUser','admin');
      return true
    }
    this.router.navigateByUrl('/login')
    return false
  }

  loginEmp(empId:string,empEmail:string,empPass:string) : Promise<Employee>{
    return new Promise((res,rej)=>{
      this.empservice.getOne(empId).then((value)=>{
        if(value.success && value.data){
          let employee : Employee = value.data;
          if(employee.email == empEmail){
            if(employee.password == empPass){
              localStorage.setItem('currentUser','emp');
              localStorage.setItem('emp',empId);
              // this.app.employee=employee;
              res(employee);
            }
          }
        }
        res(null);
      });
    });
  }

  logout(){
localStorage.removeItem('currentUser')
  }
  islogin(){}
}
