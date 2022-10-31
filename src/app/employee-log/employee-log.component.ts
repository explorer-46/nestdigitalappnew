import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.logEmp()
   }

   empId=localStorage.getItem("emp_id")

  logEmp=()=>{
    let data={
      "empId":localStorage.getItem("emp_id")
    }
    console.log(data)
    this.myapi.viewLogEmp(data).subscribe(
      (resp)=>{
        this.dataSource=resp
      }
    )
  }













  displayedColumns: string[] = ['e_name','check_in','out_date','in_date'];
  dataSource:any=[]
  ngOnInit(): void {
  }

}
