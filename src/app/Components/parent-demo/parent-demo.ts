import { Component } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo,Child2Demo,FormsModule],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {

 async Dataused(){
let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
let userdata = await response.json();
console.log(userdata);
    
  }

  NewArr=[10,20,30,40];
  a = 100;
  parent_c:number|undefined;



  reciveDatafromChild(c_child : number){
   this.parent_c=c_child;
  }
// constructor() {
//     console.log("Parent constructor")
//   }
//   ngOnInit() {
//    this. Dataused()
//     console.log('Parent ngOnInit');
//   }
//   ngOnChanges() {
//     console.log('Parent ngOnChanges');
//   }
//   ngDoCheck() {
//     console.log('Parent ngDoCheck');
//   }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
  // increment() {
    
  // }

}
