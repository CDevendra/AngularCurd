import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Emp } from './emp.model';
import { Injectable } from '@angular/core'; 

@Injectable()
export class EmpService{

    empList : AngularFireList<any>;
    selectedEmp : Emp = new Emp();
    constructor(private firebase : AngularFireDatabase){ }

    getData(){
        this.empList = this.firebase.list('emps');
        return this.empList;
    }

    insertEmp(emp : Emp){
        this.empList.push({
            name : emp.name,
            position : emp.position,
            office : emp.office,
            salary : emp.salary
        });
    }

    updateEmp(emp: Emp){
        this.empList.update(emp.$key,{
            name : emp.name,
            position : emp.position,
            office : emp.office,
            salary : emp.salary
        })
    }

    deleteEmp(key : string){
        this.empList.remove(key);
    }
}