import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppapiService } from '../appapi.service';
import { Employee } from '../model/employee.model';


@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
employeeDtails:Employee={ 
 id:"",
name:"",
email:"",
phone:0,
salarry:0,
department:""

}
  constructor(private activate:ActivatedRoute,private apiser:AppapiService,private router:Router) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe({
      next:(params)=>{
        console.log("id", params);
        const id=params.get('id')
        if(id){
          //call apr-------------------------------------------------------
          this.apiser.getEmployee(id).subscribe({
            next:(res)=>{
             console.log(res);
             this.employeeDtails = res;
            }
          })
        }
    }})
  }
  updateEmployee(){
    this.apiser.updateEmployee(this.employeeDtails.id ,this.employeeDtails ).subscribe({
      next:(response)=>{
        this.router.navigate(['employee-list'])
      }
    } )
      
      

  } 
  
  deleteEmp(id:string){
    this.apiser.deletEmployee(id).subscribe({
      next:(res)=>{
        console.log("deleted")
        this.router.navigate(['employee-list'])
        ;},error :()=>{alert('not deleted');}
    })
  }
  

}
