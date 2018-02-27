import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

    // gender = 'male';
    // contactPreference = 'phone';
    // isActive = 'true'
    // department = '3';

    departments : Department[] = [
        { id: 1, name: 'Help Desk' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'IT' },
        { id: 4, name: 'Paroll' },
        { id: 5, name: 'Admin' },
    ];

    constructor() { }

    ngOnInit() {
    }
    
    saveEmployee(empForm: NgForm): void{
        console.log(empForm.value);
    }
}
