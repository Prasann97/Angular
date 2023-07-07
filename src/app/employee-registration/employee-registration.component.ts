import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeRegistrationService } from '../employee-registration.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit{

  employee=new Employee(0,"",0);
  message:any;
  employeeList: any;
  constructor(private employeeRegistrationService:EmployeeRegistrationService){

  }
  ngOnInit(): void {
    let msg=this.employeeRegistrationService.getAllEmployees();
    msg.subscribe((data)=>this.employeeList=data);
    console.log(this.employeeList);
  }

  public delteUser(id:number){
    let resp= this.employeeRegistrationService.deleteUser(id);
    resp.subscribe((data)=>this.employeeList=data);
   }

   public updateUser(id:number){
    let resp= this.employeeRegistrationService.updateUser(id);
    resp.subscribe((data)=>this.employee=<Employee>data);
   }

  public registerNow()
  {
    console.log(this.employee);
    let msg=this.employeeRegistrationService.doRegistration(this.employee);
    console.log(msg);
    msg.subscribe((data)=>this.employeeList=data);
    // this.ngOnInit();
    this.employee=new Employee(0,"",0);
  }
}
