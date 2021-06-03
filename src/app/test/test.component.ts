import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  newEmployeeClicked = false;

  employees = [
    { name: 'Adam', position: 'Manager'},
    { name: 'Beni', position: 'HRD'},
    { name: 'Citra', position: 'Admin'}
  ];

  color;

  constructor() { 
    }

  ngOnInit(): void {
    
    }

    model: any = {};
    model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    this.employees.splice(i,1);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }

}