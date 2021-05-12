import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


const routes: Routes = [
    { path: 'employee', redirectTo: 'employee/home', pathMatch: 'full' },
    { path: 'employee/home', component: ShowEmployeeComponent },
    { path: 'employee/details/:employeeId', component: EmployeeDetailsComponent },
    { path: 'employee/add', component: AddEmployeeComponent },
    { path: 'employee/update/:employeeId', component: UpdateEmployeeComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { } 