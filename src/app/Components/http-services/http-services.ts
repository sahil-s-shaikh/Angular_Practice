import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-services',
  imports: [],
  templateUrl: './http-services.html',
  styleUrl: './http-services.css',
})
export class HttpServices {
  User_Api='https://jsonplaceholder.typicode.com/todos/1';
httpService=inject(HttpServices);

  ngOnInit(){ this.fetchUser_JavaScript();
  this.fetchUser_angular();}
 

fetchUser_JavaScript(){
fetch(this.User_Api).then((response)=>{
  response.json().then((userArr)=>{
    console.log('JavaScript:',userArr)
  })
})
}

fetchUser_angular()
{


}
}
