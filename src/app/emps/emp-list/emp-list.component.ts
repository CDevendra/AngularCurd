import { element } from 'protractor';
import { Emp } from './../shared/emp.model';
import { EmpService } from './../shared/emp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

    emplist : Emp[];
    constructor(private empService : EmpService) { }

    ngOnInit() {
      var x = this.empService.getData();
      x.snapshotChanges().subscribe(item => {
        this.emplist=[];
        item.forEach(element =>{
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.emplist.push(y as Emp);
        })
      })
    }
    
    onItemClick(emp : Emp){
      this.empService.selectedEmp = Object.assign({},emp);
    }
  
}
