import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule],  // Include CommonModule here
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] = [
    {
      id: '12345',
      name: 'Lahiru',
      email: 'lahir@gmail.com',
      phone: 786811063,
      salary: 60000,
      department: 'IT'
    },
    {
      id: '78095',
      name: 'Kamal',
      email: 'kamallahir@gmail.com',
      phone: 7836811063,
      salary: 80000,
      department: 'English'
    },
    {
      id: '1we45',
      name: 'Nimal',
      email: 'Nimallahir@gmail.com',
      phone: 786811063,
      salary: 12000,
      department: 'Management'
    }
  ];

}
