import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students=[{Id:1,name:'Shubham',class:'Bcs',Gender:'male'},
    {Id:2,name:'Aditya',class:'Bca',Gender:'male'},
    {Id:3,name:'Riya',class:'Bcs',Gender:'fe-male'},
    {Id:4,name:'Vaibhav',class:'Bca',Gender:'male'},
    {Id:5,name:'Siya',class:'Bca',Gender:'fe-male'},
  {Id:6,name:'Piya',class:'Bcs',Gender:'fe-male'}];

  getAllstudents(){
    return this.students;
  }


  getstudentOfBcs(){
    return this.students.filter(std=>std.class=='Bcs')
  };
  getstudentofBca(){
    return this.students.filter(std=>std.class=='Bca')
  };

}
