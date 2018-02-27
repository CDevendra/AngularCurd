import { EmpService } from './../shared/emp.service';

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

    
    constructor(private empService : EmpService) { }

    ngOnInit() {
      this.resetForm();
    }
    
    onSubmit(form : NgForm){
      if(form.value.$key == null)
        this.empService.insertEmp(form.value);
      else
        this.empService.updateEmp(form.value);
      this.resetForm(form);
    }
    
    resetForm(form? : NgForm){
      if(form!=null)
        form.reset();
      this.empService.selectedEmp = {
        $key : null,
        name : '',
        position: '',
        office : '',
        salary : 0,
      }
    }

    onDelete(form : NgForm){
      if(confirm('Are you sure to delete this record ?')==true){

        this.empService.deleteEmp(form.value.$key);
        this.resetForm(form); 
      }
    }
}
