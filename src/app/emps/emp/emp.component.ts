import { EmpService } from './../shared/emp.service';

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

    //today = new Date(Date.now());   
    //today = new Date(Date.now()).toLocaleString().split(', ')[1]; 
    //today = new Date( 3600000*Math.floor(Date.now()/3600000)); 
    //today = new Date().toJSON().slice(0,10);
    //today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    //today = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    totalTime = '00:00';
    
    constructor(private empService : EmpService) { 
      
    }

    ngOnInit() {
      this.resetForm();
    }
    
    onSubmit(form : NgForm){
      form.value.date = new Date().toJSON().slice(0,10).toString();//.replace(/-/g,'/'),
      form.value.startTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
      form.value.endTime = "";
      this.totalTime = "00:00";
      if(form.value.$key == null)
        this.empService.insertEmp(form.value, this.totalTime);
      else
        this.empService.updateEmp(form.value, this.totalTime);
      this.resetForm(form);
    }

    resetForm(form? : NgForm){
      if(form!=null)
        form.reset();
      this.empService.selectedEmp = {
        $key : null,
         name : '',
        // position: '',
        // office : '',
        // salary : 0,
        date : '',
        startTime : '',//new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }),
        endTime : '',//new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
        totalTime: ''
      }
    }

    onDelete(form : NgForm){
      if(confirm('Are you sure to delete this record ?')==true){

        this.empService.deleteEmp(form.value.$key);
        this.resetForm(form); 
      }
    }

    addEndTime(form : NgForm){
      form.value.date = this.empService.selectedEmp.date;
      form.value.startTime = this.empService.selectedEmp.startTime;
      form.value.endTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
      console.log("asdfghb :" + form.value.endTime);
      //this.empService.updateEmp(form.value, this.totalTime);
      //this.resetForm(form);

      let a = form.value.startTime;
      let b = form.value.endTime;
      console.log("A : "+a+"  B : "+b);

      let c = a.split(":")
      let d = b.split(":")
      let aH = parseInt(c[0])
      let aM = parseInt(c[1])
      let bH = parseInt(d[0])
      let bM = parseInt(d[1])      
      
      if(aM > bH) {
       bH -= 1
       bM += 60
      }
      if(aH > bH) {
        bH += 24
      }
      let hour = bH - aH
      let min = bM - aM
      if(min == 60) {
        hour += 1
        min = parseInt("00")
      } else if (min == 0) {
        min = parseInt("00")
      }
      console.log("Total Time = "+ hour + ":" + min)
      this.totalTime = hour + ":" + min;
      alert("Total time : "+this.totalTime);

      this.empService.updateEmp(form.value, this.totalTime);
  }
}
