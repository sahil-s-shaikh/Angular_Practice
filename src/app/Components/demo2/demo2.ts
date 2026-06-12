import { Component, inject } from '@angular/core';
import { Math1 } from '../../Services/math1';
import { ObjutilServices } from '../../Services/objutil-services';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {

  mathService = inject (Math1);
  objUtil=inject(ObjutilServices);


    ngOnInit() {
 console.log('Demo-2 init');
 console.log(`sum of numbers from demo-2: ${this.mathService.sum([20,40,60])}`);
  console.log(`indexOfmax  numbers from demo-2: ${this.mathService.indexOfMax([20,40,60])}`);

  console.log(`is this object is Empty? ${this.objUtil.isEmpty({})}`);
    console.log(`is this object is Empty? ${this.objUtil.isEmpty({Name:'Sahil'})}`);

   }
   ngOnDestroy() {
    console.log('Demo-2 Destory');
  }
}
