import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

    employees: Employee[] = [
        {
            id: 1,
            name: 'Mowgli',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mowgli@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: 'Cartoon',
            isActive: true,
            photoPath: 'assets/images/mowgli.png'
        },
        {
            id: 2,
            name: 'Goku',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: 'TV Series',
            isActive: true,
            photoPath: 'assets/images/goku_super.png'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
