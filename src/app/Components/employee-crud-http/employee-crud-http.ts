import { Component, inject } from '@angular/core';
import { HttpClients } from '../../Services/http-clients';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud-http',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-crud-http.html',
  styleUrl: './employee-crud-http.css',
})
export class EmployeeCrudHttp {

  httpClientService=inject(HttpClients);

  Employee$ : Observable<any>|undefined;

  fetchAllEmployees(){
    this.Employee$ = this.httpClientService.getAllEmployees();
    console.log(this.Employee$)
  }


  
  deleteEmployee(id:any){
    this.httpClientService.deleteEmployee(id).subscribe({
   next:(res)=>{
    console.log("Delete Successfully")
    this.fetchAllEmployees()
   },
   error:(err)=>{
    console.log(err)
   }
    });
  }

  addEmp(firstName: any, lastName: any, email: any, gender: any, sal: any) {
    const newEmp = { firstName, lastName, email, gender, sal };
    this.httpClientService.addEmployee(newEmp).subscribe((response) => {
      alert('employee added successfully');
    });
  }
}
