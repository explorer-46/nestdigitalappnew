import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleave-admin',
  templateUrl: './viewleave-admin.component.html',
  styleUrls: ['./viewleave-admin.component.css']
})
export class ViewleaveAdminComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewLeaveAdmin().subscribe(
      (resp)=>{
        this.dataSource=resp
        console.log(resp)
      }
    )
  }
  


  apprLeave=(id:any)=>{
    let data={
      "id":id,
      "status":1
    }
    this.myapi.updateStatus(data).subscribe(
      (resp)=>{

      }
    )
    alert("APPROVED")
    
    this.fetchData()

  }
  denyLeave=(id:any)=>{
    let data={
      "id":id,
      "status":2
    }
    this.myapi.updateStatus(data).subscribe(
      (resp)=>{

      }
    )
    alert("DENIED")
    this.fetchData()

  }








  displayedColumns: string[] = ['emp_id','e_name', 'e_desg', 'discrip', 'apply_date','leave_date', 'type','approve','reject'];
  dataSource:any=[]

  ngOnInit(): void {
  }

}
