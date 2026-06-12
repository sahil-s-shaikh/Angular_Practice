import { Component, inject } from '@angular/core';
import { TodoService } from '../../Services/todo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  todoService = inject(TodoService);

  todoArr$ = this.todoService.todoObs;

  deleteTodo(todoId : any){

    this.todoService.deleteTodo(todoId);
  }
}
