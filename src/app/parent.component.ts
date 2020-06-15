import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (clicked)="OnChildClick($event)" [childMessage]="parentMessage"></app-child>
  `
})
export class ParentComponent{
  parentMessage = "message from parent"
  constructor() { }

  OnChildClick(event){
      console.log(event);
  }
}