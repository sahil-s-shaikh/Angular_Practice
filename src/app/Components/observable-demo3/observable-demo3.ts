import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, viewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, exhaustMap, fromEvent, map, Observable, switchMap } from 'rxjs';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-observable-demo3',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css',
})
export class ObservableDemo3 {

  searchResult$ : Observable<any>|undefined;
  serchForm:any;
  constructor(private http : HttpClient){

    this.serchForm= new FormGroup({
      searchField : new FormControl()
    });
  }
  ngOnInit(){
    this.searchResult$=this.serchForm.get("searchField").valueChanges.pipe(
      debounceTime(200),
      
      switchMap((term)=>
      this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),
      map((response:any)=>
      response.users.length>0?response.users:[])
    );
  }






  // @viewChild('loginBtn') loginBtn! : ElementRef;
  
  // ngAfterViewInit(){
  //   fromEvent(this.loginBtn.nativeElement,'click').pipe(exhaustMap((val)=>{
  //     return this.http.get('https://httpbin.org/delay/5')
  //   })).subscribe({
  //     next:(res)=>console.log('Response',res),
  //     error : (err)=>console.log("error",err)
  //   })
  // }
}
