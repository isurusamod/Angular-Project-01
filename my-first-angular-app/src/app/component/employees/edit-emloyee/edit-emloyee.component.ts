import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-emloyee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-emloyee.component.html',
  styleUrl: './edit-emloyee.component.css'
})
export class EditEmloyeeComponent implements OnInit{

  emaployeeDestils: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    description: ''
  };

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.employeesService.getEmployee(id).subscribe({
            next: (response) => {
              this.emaployeeDestils = response;
            }
          });
        }
      }
    });
  }

  updateEmloyee(){
    this.employeesService.updateEmployee(this.emaployeeDestils.id, this.emaployeeDestils)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['employee']);
      }
    });
  }

  deleteEmployee(id: string){
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['employee']);
      }
    });
  }

}
