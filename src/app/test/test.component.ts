import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <!--Component Interaction-->
  <h2>{{name + " To TestComponent" }}</h2><br>
  <button (click)="fireEvent()">Event</button>

  <!--Pipes-->
  <h2>{{title | uppercase}}</h2>
  <h2>{{person | json}}</h2>
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{0.25 | currency}}</h2>
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit 
{
  public title = "Pipes in Angular";
  public person ={
    "firstName":"shreya",
    "lastName":"shejwalkar"
  }
  public date = new Date();

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void { }
  fireEvent()
  {
    this.childEvent.emit("Hello from Test Component to AppComponent");
  }
}
