import { EmpService } from './shared/emp.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css'],
  providers : [EmpService]
})
export class EmpsComponent implements OnInit {

    
    constructor(private empService : EmpService) { }

    ngOnInit() {
    }
    
  
}
