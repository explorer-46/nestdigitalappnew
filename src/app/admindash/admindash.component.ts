import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  empId = ""
  e_Name = ""
  e_Phn = ""
  eAdd = ""
  ejoind = ""
  eDob = ""
  eDesg = ""
  email = ""
  ePass = ""

  empregButton = () => {
    let data = {

      "empId": this.empId,
      "e_Name": this.e_Name,
      "e_Phn": this.e_Phn,
      "eAdd": this.eAdd,
      "ejoind": this.ejoind,
      "eDob": this.eDob,
      "eDesg": this.eDesg,
      "email": this.email,
      "ePass": this.ePass
    }
    console.log(data)
    this.myapi.addEmpl(data).subscribe()
    alert("ADDED")


  }


  ngOnInit(): void {
  }

}
