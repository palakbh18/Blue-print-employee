import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private sub: any;
  private employee: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      let id = params['employeeId'];
      if (id == undefined) {
        id = 1;
      }
      // Retrieve EmployeeDetails with Id route param
      console.log(id);
      this.employeeService.getById(id).subscribe((data: Employee) => {
        console.log(data);
        this.employee = data;
      });
    });
  }
}