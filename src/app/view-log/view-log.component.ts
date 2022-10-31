import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})
export class ViewLogComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewAllLog().subscribe(
      (resp)=>{
        this.dataSource=resp
        console.log(resp)
      }
    )
  }







  displayedColumns: string[] = ['emp_id', 'check_in', 'e_name', 'out_date','e_desg','in_date'];
  dataSource:any=[]

  ngOnInit(): void {
  }

}
