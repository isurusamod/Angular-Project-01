import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    description: ''
  }

  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (emaployee) =>{
        this.router.navigate(['employee']);
      }
    });
  }

}
