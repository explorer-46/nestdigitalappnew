import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  
  fetchData=()=>{
    this.myapi.viewAllEmp().subscribe(
      (resp)=>{
        console.log("entered")
        this.dataSource=resp
        console.log(resp)
      }
    )
  }

  dEmpl=(empId:any)=>{
    let data={
      "empId": empId
    }
    this.myapi.dltEmp(data).subscribe(
      (respo)=>{
        
        
      }
    )
    alert("Successful")
    this.fetchData()
  }








  displayedColumns: string[] = ['empId', 'e_Name', 'e_Phn', 'ejoinD','eAdd', 'eDob', 'eDesg', 'email','ePass','delete'];
  dataSource:any=[]

  ngOnInit(): void {
  }

}
