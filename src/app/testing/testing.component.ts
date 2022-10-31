import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  txt="amal"
  addText=()=>{
    return this.txt
    
  }

  ngOnInit(): void {
  }

}
