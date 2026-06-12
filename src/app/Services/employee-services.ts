import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServices {

  employees=[{Id:1,name:'Shubham',Dep:'It',Gender:'male',salary:30000},
    {Id:2,name:'Aditya',Dep:'Hr',Gender:'male',salary:35000},
    {Id:3,name:'Riya',Dep:'It',Gender:'fe-male',salary:30400},
    {Id:4,name:'Vaibhav',Dep:'Sales',Gender:'male',salary:30020},
    {Id:5,name:'Siya',Dep:'Pr',Gender:'fe-male',salary:50000},
  {Id:6,name:'Piya',Dep:'It',Gender:'fe-male',salary:20000}];

  getAllEmployees(){return this.employees};
  
  getMaleEmployees(){
    return this.employees.filter(emp=>emp.Gender=='male')
  };
  getFemaleEmployees(){
    return this.employees.filter(emp=>emp.Gender=='fe-male')
  };

}
