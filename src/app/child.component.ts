import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{ message }}

      <button (click)="OnClick()">Click To Emit Event</button>
  `
})
export class ChildComponent {

  @Input() childMessage: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  OnClick(){
      this.clicked.emit({data: 'Event emitted'});
  }
}