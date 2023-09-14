import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './model/employee.model';
import { LogEmp } from './model/logEmp.model';

@Injectable({
  providedIn: 'root'
})
export class AppapiService {
 baseApiUrl:string= environment.baseUrl;

  constructor(private http:HttpClient) { }

  getallEmployee():Observable<Employee[]>{
   return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employees');
  }

  AddEmpoyee(empoyeereq:Employee):Observable<Employee>{

    empoyeereq.id='00000-00000-00000-00000';
    console.log(`${this.baseApiUrl}/api/Employees`,empoyeereq);
    
    return  this.http.post<Employee>("https://localhost:7225/api/Employees",empoyeereq);
  }

  getEmployee(id:string):Observable<Employee>{
    console.log(id)
    console.log(this.http.get<Employee>(this.baseApiUrl+"/api/Employees/"+id));
    
   return this.http.get<Employee>(this.baseApiUrl+"/api/Employees/"+id)
  }

  updateEmployee(id: string,updateEmployee:Employee):Observable<Employee>{

   return this.http.put<Employee>(this.baseApiUrl +'/api/Employees/'+id,updateEmployee)
  }

  deletEmployee(id:string):Observable<Employee>{
    return   this.http.delete<Employee>(`${this.baseApiUrl}/api/Employees/${id}`);

  }

  logEmp(data:any):Observable<LogEmp>{
    return this.http.post<LogEmp>(this.baseApiUrl+'/api/Employees/Login',data)
  }
}
