import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <h2>Employee Details</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}.{{employee.name}}</li>
  </ul>
  `,
  styleUrls: []
})
export class EmployeeDetailsComponent implements OnInit 
{
  public employees = [];

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void 
  {
    this.employees=this._employeeService.getEmployees(); 
  }

}
