import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppapiService } from '../appapi.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
addEmployeereq:Employee={
  id:"",
  name:"",
  email:"",
  phone:0,
  salarry:0,
  department:""
}
  constructor(private apiser:AppapiService,private router:Router) { }

  ngOnInit(): void {
  }

  addEmp(){
    console.log(this.addEmployeereq);
    this.apiser.AddEmpoyee(this.addEmployeereq).subscribe({
      next:(employee)=>{
        console.log(employee)
        this.router.navigate(['employee-list'])
      }
    }
    
  );
  }
}
