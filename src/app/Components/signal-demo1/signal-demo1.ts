import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, Inject, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css',
})
export class SignalDemo1 {

  count : WritableSignal<number>=signal(0);

  countDouble : Signal<number> = computed(()=> this.count() * 2);
  countSquare : Signal<number> = computed(()=> this.count() * this.count());

  incrementCount(){

    this.count.update(val=>val+1);
  };


  httpClients = inject(HttpClient)

  userId : WritableSignal<number> = signal(1);
  userData : WritableSignal<any> = signal({});


  userdEffect = effect(()=>{``
    const userId = this.userId();
    this.fetchUserDetails(userId);
  });

  
  fetchUserDetails(userId : number){

    this.httpClients.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .subscribe((response: any) => {
      this.userData.set(response);
    })
  };

  incrementuserId(){
    this.userId.update((val)=>val+1);
  }

}
