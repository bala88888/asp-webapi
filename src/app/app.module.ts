import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';

import { EmpolyeeListComponent } from './Employees/empolyee-list/empolyee-list.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { FormsModule } from '@angular/forms';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { LogEmpComponent } from './log-emp/log-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpolyeeListComponent,
    AddEmployeesComponent,
    EditEmpComponent,
    LogEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
