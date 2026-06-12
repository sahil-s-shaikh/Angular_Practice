import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.html',
  styleUrl: './http-demo2.css',
})
export class HttpDemo2 {

    User_Api='https://jsonplaceholder.typicode.com/users';

    httpClient = inject(HttpClient);
    userArr : any = signal([]);

    ngOnInti(){
      this.fetchUsers();
    }


    fetchUsers(){
      this.httpClient.get(this.User_Api)
      .subscribe((response)=>
        {this.userArr.set(response)});
    }
}
