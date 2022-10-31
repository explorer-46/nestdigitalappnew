import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkoutdata',
  templateUrl: './checkoutdata.component.html',
  styleUrls: ['./checkoutdata.component.css']
})
export class CheckoutdataComponent implements OnInit {

  constructor(private myapi: ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewCheckin().subscribe(
      (reso)=>{
        this.dataSource=reso
      }
    )
  }


  
  checkoutbutton = (id:any) => {
    let data = {
      "id": id,
      "checkOut":1
    }
    console.log(data)
    this.myapi.udateCheckout(data).subscribe(
      (resp)=>{

      }
        
    )
    alert("checkout")
    this.fetchData()

  }




  displayedColumns: string[] = ['id','emp_id','e_name', 'in_date','e_desg', 'checkout'];
  dataSource: any = []
  ngOnInit(): void {
  }

}
