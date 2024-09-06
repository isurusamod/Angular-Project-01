import { Routes } from '@angular/router';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './component/employees/add-employee/add-employee.component';
import { EditEmloyeeComponent } from './component/employees/edit-emloyee/edit-emloyee.component';

export const routes: Routes = [
    {
        path: 'employee',
        component: EmployeesListComponent,
    },
    {
        path: 'addemployee',
        component: AddEmployeeComponent,
    },
    {
        path: 'editemployee/edit/:id',
        component: EditEmloyeeComponent,
    }
];
