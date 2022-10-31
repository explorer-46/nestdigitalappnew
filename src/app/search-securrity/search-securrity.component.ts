import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-securrity',
  templateUrl: './search-securrity.component.html',
  styleUrls: ['./search-securrity.component.css']
})
export class SearchSecurrityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  
  sCode=""

  secsearchButton=()=>{

    let data={
      "sCode":this.sCode

    }
    console.log(data)
    this.myapi.searchSecurity(data).subscribe(
      (resp)=>{
        this.searchS=resp
      }
    )
  }
  secUpdateButton=()=>{
    this.myapi.updateSecurity(this.searchS[0]).subscribe(
      (resp)=>{
        
      }
    )
    alert("UPDATED")
  }




searchS:any=[]



  ngOnInit(): void {
  }

}
