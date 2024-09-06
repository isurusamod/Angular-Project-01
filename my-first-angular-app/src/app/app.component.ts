import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './component/employees/add-employee/add-employee.component';
import { EditEmloyeeComponent } from './component/employees/edit-emloyee/edit-emloyee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeesListComponent, HttpClientModule,FormsModule,AddEmployeeComponent,EditEmloyeeComponent,RouterModule],
  providers: [], // Remove any providers from here if present
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
}