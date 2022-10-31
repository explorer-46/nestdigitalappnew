import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdmindashComponent } from './admindash/admindash.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

import {MatTableModule} from '@angular/material/table';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { ViewLogComponent } from './view-log/view-log.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchSecurrityComponent } from './search-securrity/search-securrity.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SecuritynavbarComponent } from './securitynavbar/securitynavbar.component';
import { SecuritydashboardComponent } from './securitydashboard/securitydashboard.component';

import { ViewleaveAdminComponent } from './viewleave-admin/viewleave-admin.component';
import { ViewleavebyEmployeComponent } from './viewleaveby-employe/viewleaveby-employe.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutdataComponent } from './checkoutdata/checkoutdata.component';


const link:Routes=[
  {path:"",component:LoginadminComponent},
  {path:"admindash",component:AdmindashComponent},

  {path:"addsecurity",component:AddSecurityComponent},
  {path:"viewsecurity",component:ViewSecurityComponent},
  {path:"viewalllog",component:ViewLogComponent},
  {path:"viewemp",component:ViewEmployeeComponent},
  {path:"searchemp",component:SearchEmployeeComponent},
  {path:"emppage",component:EmployeeDashboardComponent},
  {path:"viewlogemp",component:EmployeeDashboardComponent},
  {path:"searchsec",component:SearchSecurrityComponent},
  {path:"securitypage",component:SecuritydashboardComponent},
  {path:"viewemplog",component:EmployeeLogComponent},
  {path:"leavereq",component:ViewleaveAdminComponent},
  {path:"viewleaveemp",component:ViewleavebyEmployeComponent},
  {path:"checkin",component:CheckinComponent},
  {path:"checkout",component:CheckoutdataComponent}
  
]



@NgModule({
  declarations: [
    AppComponent,
    LoginadminComponent,
    AdminnavbarComponent,
    AdmindashComponent,
    TestingComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    ViewLogComponent,
    EmployeeNavbarComponent,
    EmployeeDashboardComponent,
    EmployeeLogComponent,
    SearchEmployeeComponent,
    SearchSecurrityComponent,
    ViewEmployeeComponent,
    SecuritynavbarComponent,
    SecuritydashboardComponent,
    
    ViewleaveAdminComponent,
    ViewleavebyEmployeComponent,
    CheckinComponent,
    CheckoutdataComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
