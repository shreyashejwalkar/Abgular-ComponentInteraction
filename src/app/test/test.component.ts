import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name + " To TestComponent" }}</h2><br>
  <button (click)="fireEvent()">Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit 
{

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void { }
  fireEvent()
  {
    this.childEvent.emit("Hello from Test Component to AppComponent");
  }
}
