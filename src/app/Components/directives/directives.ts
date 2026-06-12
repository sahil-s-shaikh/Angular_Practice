import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {



  isDiv1visibal : boolean = false;

Div1add(){
  this.isDiv1visibal=true;
}
Div1remove(){
  this.isDiv1visibal=false;
}

isDiv2Visibale : boolean = false ;
toggel(){
  this.isDiv2Visibale =! this.isDiv2Visibale;
}

num1 : string ='';
num2 : string ='';

isChckbox : boolean = false;

selectedValue : string = '';


citys : string []=['pune','beed','kaij','latur','dharashiv','nanded','isthal'];

CarsList : any []=[{carno : "112",carname:"BMW-m4",carPrice:"2cr",carAvalable:true},
  {carno : "112",carname:"BMW-m4",carPrice:"2cr",carAvalable:true},
  {carno : "113",carname:"BMW-m5",carPrice:"4cr",carAvalable:false},
  {carno : "114",carname:"BMW-m6",carPrice:"6cr",carAvalable:true},
  {carno : "115",carname:"BMW-m2",carPrice:"3cr",carAvalable:false},
  {carno : "116",carname:"BMW-m4",carPrice:"2cr",carAvalable:true}
]

}
