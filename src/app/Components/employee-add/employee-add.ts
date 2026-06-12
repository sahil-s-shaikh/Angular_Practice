import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['addemp']
})
export class EmployeeAdd {


  addemp = new EventEmitter();
  

  addEmployee(eId:string,name:string,role:string,department:string,salary:string){

    const newEmpObj={eId,name,role,department,sal:salary}
 this.addemp.emit(newEmpObj)
  }

}
