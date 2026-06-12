import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  outputs:['csend']
})
export class Child2Demo {
  b=200;

  c = 2000;

  csend = new EventEmitter();
  SendtoParent(){
    this.csend.emit(this.c);
  }
}
