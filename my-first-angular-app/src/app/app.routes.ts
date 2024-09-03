import { Routes } from '@angular/router';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';

export const routes: Routes = [
    {
        path: 'employee',
        component: EmployeesListComponent,
    }
];
