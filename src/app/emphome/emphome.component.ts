import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Employee } from '../models/Employee';
import { EmpserviceService } from '../services/empservice.service';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {

  employee : Employee;

  constructor(private app : AppComponent,private empservice : EmpserviceService) { }

  ngOnInit(): void {
    let empId = localStorage.getItem('emp');
    this.empservice.getOne(empId).then((value)=>{
      if(value.success){
        this.employee = value.data;
      }
    });
  }

}
