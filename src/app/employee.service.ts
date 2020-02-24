import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService 
{

  constructor() { }

  getEmployees()
  {
    return [
      {"id":1, "name":"shreya"},
      {"id":2, "name":"rabia"},
      {"id":3, "name":"Aasawari"}
    ];
  }
}
