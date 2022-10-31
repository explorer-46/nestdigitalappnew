import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewSecurity().subscribe(
      (resp)=>{
        this.dataSource=resp
        console.log(resp)
      }
    )
  }


  deleteSecurity=(sCode:any)=>{
    let data={
      "sCode": sCode

    }
    this.myapi.dltsecurity(data).subscribe(
      (resp)=>{

      }
    )
    alert("DELETED")
    this.fetchData()

  }







  displayedColumns: string[] = ['sCode', 'sName', 'sPhn', 'sAddress','userName', 'pass','delete'];
  dataSource:any=[]
  ngOnInit(): void {
  }

}
