import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleaveby-employe',
  templateUrl: './viewleaveby-employe.component.html',
  styleUrls: ['./viewleaveby-employe.component.css']
})
export class ViewleavebyEmployeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  emp_id=localStorage.getItem("emp_id")

  fetchData=()=>{
    let data={
      "emp_id":localStorage.getItem("emp_id")
    }
    console.log(data)
    this.myapi.viewLeaveEmp(data).subscribe(
      (resp)=>{
        this.dataSource=resp
      }
    )
  }





  displayedColumns: string[] = ['e_name', 'e_desg', 'discrip', 'apply_date','leave_date', 'type','status'];
  dataSource:any=[]
  ngOnInit(): void {
  }

}
