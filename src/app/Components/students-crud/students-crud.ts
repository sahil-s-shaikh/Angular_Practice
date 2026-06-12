import { Component } from '@angular/core';
import { StudentService } from '../../Services/student-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students-crud',
  imports: [FormsModule],
  templateUrl: './students-crud.html',
  styleUrl: './students-crud.css',
})
export class StudentsCrud {

 students:any []=[];


  selected='all';
   constructor(private studentService:StudentService){};
 
   ngOnInit(){
     this.students=this.studentService.getAllstudents();
   }
 
   changeData(){
     if(this.selected=='all'){
       this.students=this.studentService.getAllstudents();
     }
     else if(this.selected=='Bcs'){
   this.students=this.studentService.getstudentOfBcs();
 
 }
 else{
   this.students = this.studentService.getstudentofBca();
 }
   }
}
