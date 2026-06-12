import { HttpClient } from '@angular/common/http';
import { inject, Injectable, model } from '@angular/core';
import { map, Observable } from 'rxjs';
import{Employeehttp} from '../models/employeehttp'
@Injectable({
  providedIn: 'root',
})
export class HttpClients {

  httpClient = inject(HttpClient)
  api_url='http://localhost:3000/Employees';



  getAllEmployees() : Observable<Employeehttp[]>{
    // return this.httpClient.get(this.api_url);
    return this.httpClient.get<Employeehttp[]>(this.api_url).
    pipe(map((responseArr)=>{
      return responseArr.map(responseObj => new Employeehttp(responseObj))
    }))
  }

  getEmployeeById(id:any){
 
    return this.httpClient.get(`${this.api_url}/${id}`);
  }

  addEmployee(empData : any){
return this.httpClient.post(this.api_url,empData);
  }

  updateEmployee(id : any , empData:any){
 return this.httpClient.patch(`${this.api_url}/${id}`,empData);
  }

  deleteEmployee(id:any){
 
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }

}
