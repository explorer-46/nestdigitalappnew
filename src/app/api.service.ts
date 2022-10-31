import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  logEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }


  loginSec=(data:any)=>{
    return this.http.post("http://localhost:8080/signinsecurity",data)
  }

  addEmpl=(data:any)=>{
    return this.http.post("http://localhost:8080/addemp",data)
  }
  viewAllEmp=()=>{
    return this.http.get("http://localhost:8080/viewallemp")
  }
  dltEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemp",data)
  }
  dltsecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesec",data)
  }
  
  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewallsec")
  }
  viewAllLog=()=>{
    return this.http.get("http://localhost:8080/viewalllogs")
  }

  viewLogEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/viewlogbyid",data)
  }

  searchEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemp",data)
  }
  updateEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/updateemp",data)
  }
  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsecu",data)
  }
  updateSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/updatesecurity",data)
  }
  addLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/addleave",data)
  }
  viewLeaveAdmin=()=>{
    return this.http.get("http://localhost:8080/viewallleaves")
  }
  updateStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",data)
  }

  viewLeaveEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/viewleavesbyempid",data)
  }
  addCheckin=(data:any)=>{
    return this.http.post("http://localhost:8080/addlog",data)
}

udateCheckout=(data:any)=>{
  return this.http.post("http://localhost:8080/logout",data)
}
viewCheckin=()=>{
  return this.http.get("http://localhost:8080/viewcheckin")
}
}
