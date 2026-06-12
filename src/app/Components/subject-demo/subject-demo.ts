import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  imports: [],
  templateUrl: './subject-demo.html',
  styleUrl: './subject-demo.css',
})
export class SubjectDemo {

  ngOnInit(){

// this.Subject_demo();
// this.behaviorSubject_demo();
// this.replaySubject_demo();
this.asyncSubject_demo();
  }

  // Subject() Got Only Upcoming Value Not Previou one
  Subject_demo(){

    let mySubject = new Subject();
    mySubject.next('Plan A');
    mySubject.subscribe((val) => console.log('Subscriber 1 Got',val));
      mySubject.next('Plan B');
       mySubject.subscribe((val) => console.log('Subscriber 2 Got',val));
       mySubject.next('Plan C')

  }


  // BehaviorSubject() Got Only One Previous and All New Value
  behaviorSubject_demo(){

    let mySubject = new BehaviorSubject('Default Plan');
    mySubject.next('Plan A');
    mySubject.subscribe((val) => console.log('Subscriber 1 Got',val));
      mySubject.next('Plan B');
       mySubject.subscribe((val) => console.log('Subscriber 2 Got',val));
       mySubject.next('Plan C')

  }


  // ReplaySubject() Got All Values
   replaySubject_demo(){

    let mySubject = new ReplaySubject();
    mySubject.next('Plan A');
    mySubject.subscribe((val) => console.log('Subscriber 1 Got',val));
      mySubject.next('Plan B');
       mySubject.subscribe((val) => console.log('Subscriber 2 Got',val));
       mySubject.next('Plan C')

  };

    // AsyncSubject() Got new values
  asyncSubject_demo(){

    let mySubject = new AsyncSubject();
    mySubject.next('Plan A');
    mySubject.subscribe((val) => console.log('Subscriber 1 Got',val));
      mySubject.next('Plan B');
       mySubject.subscribe((val) => console.log('Subscriber 2 Got',val));
       mySubject.next('Plan C')

       mySubject.complete()
  };

}
