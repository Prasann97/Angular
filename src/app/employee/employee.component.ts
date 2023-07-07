import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeRegistrationService } from '../employee-registration.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  title="Employee List";
  emp=[];
  employeeList: any;
  constructor(private employeeRegistrationService:EmployeeRegistrationService) {
    //this.emp=employeeService.getList();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
   
}
