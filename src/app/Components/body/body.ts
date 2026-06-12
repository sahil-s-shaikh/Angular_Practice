import { Component, Directive } from '@angular/core';
import { Directives } from '../directives/directives';
import { UserList } from '../user-list/user-list';

import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Categories } from '../categories/categories';
import { EmployeCRUD } from '../employe-crud/employe-crud';
import { Demo2 } from '../demo2/demo2';
import { Demo1 } from '../demo1/demo1';
import { HttpServices } from '../http-services/http-services';
import { EmployeeComponents } from '../employee-components/employee-components';
import { EmployeeCrudHttp } from '../employee-crud-http/employee-crud-http';
import { CommentList } from '../comment-list/comment-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { StudentsCrud } from '../students-crud/students-crud';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo } from '../subject-demo/subject-demo';
import { TodoAdd } from '../todo-add/todo-add';
import { TodoList } from '../todo-list/todo-list';
import { HttpDemo2 } from '../http-demo2/http-demo2';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { EmployeeSubjectAssignment } from '../employee-subject-assignment/employee-subject-assignment';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateFormDemo } from '../template-form-demo/template-form-demo';
import { RouterLink, RouterOutlet } from '@angular/router';

// import { DataBinding } from '../data-binding/data-binding';
// import { FormsModule } from '@angular/forms';
// import { DataBindingHomework } from '../data-binding-homework/data-binding-homework';


@Component({
  selector: 'app-body',
  imports: [
  RouterOutlet
],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag=true;
}
