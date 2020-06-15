import { Component, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ChildViewchildComponent } from './child-viewchild.component';

@Component({
  selector: 'app-viewchild-parent',
  template: `
    Message: {{ message }}
    <app-viewchild-child></app-viewchild-child>
  `
})
export class ParentViewchildComponent implements AfterViewInit, AfterContentChecked{
    @ViewChild(ChildViewchildComponent) child;

    constructor() { }
  
    message:string = '';
  
    ngAfterViewInit() {
      // this.message = this.child.message
    }

    ngAfterContentChecked(){
      this.message = this.child.message
    }
}