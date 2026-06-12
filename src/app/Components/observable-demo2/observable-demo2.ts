import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {

  httpClient = inject(HttpClient)
  ngOnInit(){
    // this.mergMap();

   this.concatMap();
  }

  // mergMap(){
  //   let UserPublisher=of(1,2,3,4,5);

  //   UserPublisher.pipe(mergeMap((userId:any )=>{
  //      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`);

  //   }),
  // ).subscribe((cartResponse)=>{
  //   console.log(cartResponse)
  // });
  // }


  
  concatMap(){
    let UserPublisher=of(1,2,3,4,5);

    UserPublisher.pipe(concatMap((userId:any )=>{
       return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`);

    }),
  ).subscribe((cartResponse)=>{
    console.log(cartResponse)
  });
  }
}
