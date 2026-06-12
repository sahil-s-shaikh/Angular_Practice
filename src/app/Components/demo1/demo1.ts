import { Component } from '@angular/core';
import { Math1 } from '../../Services/math1';
import { ObjutilServices } from '../../Services/objutil-services';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
timerId:any;
  constructor(private mathservice : Math1,private objUtil:ObjutilServices){

    this.timerId=setInterval(()=>{
      console.log('Demo-1 Timer is Running')
    } ,1000);
  }

   ngOnInit() {
 console.log('Demo-1 init');

 console.log(`Sum is of Demo1: ${this.mathservice.sum([10,20,30])}`);

 console.log(`average is of Demo1: ${this.mathservice.average([10,20,30])}`);

 console.log(`indexOfMax is of Demo1: ${this.mathservice.indexOfMax([10,20,30])}`);

 console.log(`Object Is Empty: ${this.objUtil.isEmpty({})}`);
 console.log(`Object Is Empty: ${this.objUtil.isEmpty({a:10})}`)



   }
   ngOnDestroy() {
    console.log('Demo-1 Destory');
    clearInterval(this.timerId);
  }
}
