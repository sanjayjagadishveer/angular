import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees=[
    {"name":"san","id":21},
    {"name":"jay","id":75},
    {"name":"veer","id":25}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
