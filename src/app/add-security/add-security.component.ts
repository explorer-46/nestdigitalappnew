import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }



  
  sCode = ""
  sName = ""
  sPhn = ""
  sAddress = ""
  userName = ""
  pass = ""
  

  regSecurity = () => {
    let data = {

      "sCode": this.sCode,
      "sName": this.sName,
      "sPhn": this.sPhn,
      "sAddress": this.sAddress,
      "userName": this.userName,
      "pass": this.pass
     
    }
    console.log(data)
    this.myapi.addSecurity(data).subscribe()
    alert("ADDED")


  }

  ngOnInit(): void {
  }

}
