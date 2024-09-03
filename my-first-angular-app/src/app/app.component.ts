import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
