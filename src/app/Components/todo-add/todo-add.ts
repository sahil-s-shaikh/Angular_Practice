import { Component, inject } from '@angular/core';
import { TodoService } from '../../Services/todo-service';

@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {

  todoService = inject(TodoService);

  addTodo(newTodo : string){
 this.todoService.addTodo({value:newTodo});
  }
}
