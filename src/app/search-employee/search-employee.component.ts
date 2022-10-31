import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  empId=""

  empsearchButton=()=>{

    let data={
      "empId":this.empId

    }
    console.log(data)
    this.myapi.searchEmp(data).subscribe(
      (resp)=>{
        this.searchE=resp
      }
    )
  }
  empUpdateButton=()=>{
    this.myapi.updateEmp(this.searchE[0]).subscribe(
      (resp)=>{
        
      }
    )
    alert("UPDATED")
  }




searchE:any=[]


  

  ngOnInit(): void {
  }

}
