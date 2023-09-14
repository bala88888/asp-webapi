import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppapiService } from 'src/app/appapi.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css'],
})
export class EmpolyeeListComponent implements OnInit {
  employees: Employee[] = [];
  //   {"id": 'ffghuhjnkk',
  //   "name": "Leanne Graham",
  //   "phone": 9866666668,
  //   "email": "Sincere@april.biz",
  //   "salarry":1233,
  //    "Department":"ggggg"
  //   },
  // {
  // "id": 'ffghuhjnkk',
  //   "name": "Leanne Graham",
  //   "phone": 7866666669,
  //   "email": "Sincere@april.biz",
  //   "salarry":123456,
  //    "Department":"ggggg"},
  // {
  // "id": 'ffghuhjnkk',
  //   "name": "Leanne Graham",
  //   "phone":7796145678,
  //   "email": "Sincere@april.biz",
  //   "salarry":1234567889,
  //    "Department":"ggggg"}

  constructor(private apiservie: AppapiService,private router:Router) {}

  ngOnInit(): void {
    this.apiservie.getallEmployee().subscribe({
      next: (result) => {
        this.employees = result;
        console.log(result);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  
}
