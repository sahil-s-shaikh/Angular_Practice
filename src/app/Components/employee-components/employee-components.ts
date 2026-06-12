import { Component } from '@angular/core';
import { EmployeeServices } from '../../Services/employee-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-components',
  imports: [FormsModule],
  templateUrl: './employee-components.html',
  styleUrl: './employee-components.css',
})
export class EmployeeComponents {

  employees:any[]=[];
  selected='all';
  constructor(private empServices:EmployeeServices){};

  ngOnInit(){
    this.employees=this.empServices.getAllEmployees();
  }

  changeData(){
    if(this.selected=='all'){
      this.employees=this.empServices.getAllEmployees();
    }
    else if(this.selected=='male'){
  this.employees=this.empServices.getMaleEmployees();

}
else{
  this.employees = this.empServices.getFemaleEmployees();
}
  }
}
