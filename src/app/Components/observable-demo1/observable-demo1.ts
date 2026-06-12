import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, forkJoin, from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {

  httpClients=inject(HttpClient)
  
  ngOnInit(){
    this.from_Demo();
    this.interval_demo();
    this.fetch_Apis();
  }



  from_Demo(){

    let Cars=['Bmw','Thar','Frari','Lambo','Dodge'];

    let Cars_Observalbe=from(Cars);
    Cars_Observalbe.subscribe({
      next:(value)=>console.log(value),
      error:(err)=>console.log(err),
      complete:()=>console.log("Last Cars Recevied")
        
      
    })
  }

  num$=interval(1000);

  even_num$=this.num$.pipe(filter(val=>val%2==0));

  first5 = this.num$.pipe(take(5));

  num_Square=this.num$.pipe(map((val)=>val*val));

  curretnDate$=interval(1000).pipe(map(()=>new Date().toLocaleTimeString()))




  interval_demo(){
this.num$.subscribe((val)=>console.log(val))
  }



  fetch_Apis(){

    let api1= this.httpClients.get('https://jsonplaceholder.typicode.com/comments');
    let api2=this.httpClients.get('https://jsonplaceholder.typicode.com/users');
    let api3=this.httpClients.get('https://jsonplaceholder.typicode.com/tados');


forkJoin([api1,api2,api3]).subscribe((res)=>{
  console.log(res)
})
  

  }
}
