import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Todo{
  id:any;
  value:string;
}

const initialTodos=[{
  id:1 , value:'Learning Angular From NIT'},
  {id:2,value:'Angular Is Very Hard'}
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private todoSubject = new BehaviorSubject <Todo[]> (initialTodos);
  readonly todoObs = this.todoSubject.asObservable();
  private todoArr:Todo[] = this.todoSubject.value;
  private nextId = 3;

  addTodo(item : any){

    item.id = this.nextId++;
    this.todoArr.push(item);
    this.todoSubject.next([...this.todoArr]);
  };


  deleteTodo(id : number){

this.todoArr.forEach((todo , ind) =>{
if(todo.id === id){
  this.todoArr.splice(ind,1);
}

this.todoSubject.next([...this.todoArr]);
})


  }



}
