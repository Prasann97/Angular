import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(employee:Employee){
    console.log("Service")
    console.log(employee);
    return this.http.post("http://localhost:8080/registration",employee);
  }

  public getAllEmployees(){
    return this.http.get("http://localhost:8080/list-all-employees");
  }

  public deleteUser(id:number){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }

  public updateUser(id:number){
    return this.http.get("http://localhost:8080/update/"+id);
  }
  
}
