import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
    
   }

   getList()
   {
    return ["abc","pqr","xyz"];
   }
}
