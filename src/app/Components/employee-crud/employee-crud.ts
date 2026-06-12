import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Snackbar from 'awesome-snackbar';
import { Message } from '../../message';
import { FormsModule } from '@angular/forms';
declare var bootstrap : any;
@Component({
  selector: 'app-employee-crud',
  imports: [
    FontAwesomeModule,FormsModule
  ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {

 employees=[

    {
      id:1,
      name:'Sahil',
      department:'IT',
      salary:50000
    },

    {
      id:2,
      name:'Rahul',
      department:'HR',
      salary:40000
    },

    {
      id:3,
      name:'Priya',
      department:'Finance',
      salary:60000
    }

  ]

  newEmployee={

    id:0,
    name:'',
    department:'',
    salary:0

  }

  selectedEmployee:any

  addEmployee(){

    const employee={

      ...this.newEmployee,

      id:this.employees.length+1

    }

    this.employees.push(employee)

     new Snackbar(Message.Employee_Added,{
        position:'top-center',theme:'Green',timeout:2000,actionText:'x'
      })

    this.newEmployee={

      id:0,
      name:'',
      department:'',
      salary:0

    }

  }

  deleteEmployee(id:number){

    let confirmDelete=
    confirm('Are you sure to Delete?')

    if(confirmDelete){

      this.employees=
      this.employees.filter(
        emp=>emp.id!==id
      )

    }

  }

  viewEmployee(employee:any){

    this.selectedEmployee=
    employee

    let modal=
    new bootstrap.Modal(

      document.getElementById(
        'employeeModal'
      )

    )

    modal.show()

  }

}
