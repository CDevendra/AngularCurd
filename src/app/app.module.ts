import { AngularFireDatabaseModule } from 'angularfire2/database';

import { EmpListComponent } from './emps/emp-list/emp-list.component';
import { EmpComponent } from './emps/emp/emp.component';
import { AppPage } from './../../e2e/app.po';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmpsComponent } from './emps/emps.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeesComponent },
  { path: 'emps', component: EmpsComponent },
 // { path: 'emps/list', component: EmpComponent },
 // { path: 'emps/list', component: EmpListComponent },  
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    EmpsComponent,
    EmpComponent,
    EmpListComponent,
    CreateEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
