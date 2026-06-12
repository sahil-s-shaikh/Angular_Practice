import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { FormsModule } from '@angular/forms';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employe-crud',
  imports: [EmployeeTable ,FormsModule,EmployeeAdd],
  templateUrl: './employe-crud.html',
  styleUrl: './employe-crud.css',
})
export class EmployeCRUD {
  // Define a simple array of employee objects
employees = [
  { id: 1, name: 'KL Rahul ', role: 'Software Engineer', department: 'IT', salary: 75000 },
  { id: 2, name: 'Rohit Sharma', role: 'Project Manager', department: 'Operations', salary: 85000 },
  { id: 3, name: 'Virat Kohli', role: 'QA Tester', department: 'IT', salary: 60000 },
  { id: 4, name: 'MS Dhoni', role: 'UX Designer', department: 'Design', salary: 70000 }
];


deleteEmployee(id:number){
  this.employees.splice(id,1);
}

addEmployee(newEmp : any){

  
  this.employees.push(newEmp)
}
}
