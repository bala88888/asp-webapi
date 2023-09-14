import { Component, OnInit } from '@angular/core';
import { AppapiService } from '../appapi.service';
import { Employee } from '../model/employee.model';
import { LogEmp } from '../model/logEmp.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-log-emp',
  templateUrl: './log-emp.component.html',
  styleUrls: ['./log-emp.component.css']
})
export class LogEmpComponent implements OnInit {
  resPost:LogEmp={
    name:"",
    email:"",
  }
  constructor(private apiSer:AppapiService,private router:Router) { }

  ngOnInit(): void {
  }

  loginEmp(){
    console.log(this.resPost);
    this.apiSer.logEmp(this.resPost).subscribe(res=>{
  console.log(res)
  this.router.navigate(['employee-list'])
    })

    }

}
