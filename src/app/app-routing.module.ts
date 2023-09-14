import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmpolyeeListComponent } from './Employees/empolyee-list/empolyee-list.component';
import { LogEmpComponent } from './log-emp/log-emp.component';

const routes: Routes = [
  {path:"",component:EmpolyeeListComponent},
  {path:"login",component:LogEmpComponent},
  {path:"employee-list",component:EmpolyeeListComponent},
  {path:"employee-add",component:AddEmployeesComponent},
  {path:"editrout/edit/:id",component:EditEmpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
