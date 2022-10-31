import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_id=localStorage.getItem("emp_id")
  leaveDate=""
  type=""
  discrip=""



  applyLeave=()=>{
    let data={
      "emp_id":localStorage.getItem("emp_id"),
      "leaveDate":this.leaveDate,
      "type":this.type,
      "discrip":this.discrip
    }
    console.log(data)
    this.myapi.addLeave(data).subscribe()
    alert("APPLIED")

  }

  ngOnInit(): void {
  }

}
