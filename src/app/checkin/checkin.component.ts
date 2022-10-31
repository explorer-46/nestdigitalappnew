import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myapi: ApiService) { }
  empId = ""
  checkIn = ""

  checkinButton = () => {
    let data = {
      "empId":this.empId,
      "checkIn":this.checkIn
    }
    console.log(data)
    this.myapi.addCheckin(data).subscribe()
    alert("CHECKIN")

  }

  ngOnInit(): void {
  }

}
