import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  year: number
  month:number
  day:number

  hour:number
  min:number
  sec:number

  constructor() {
    //setInterval(()=> {this.getDateTime(),100000});
    this.getDateTime()
  }

  ngOnInit(): void {
  }


  getDateTime(){
    this.year= new Date().getFullYear();
    this.month=new Date().getMonth()+1;
    this.day=new Date().getDay();
    this.hour=new Date().getHours();
    this.min=new Date().getMinutes();
    this.sec=new Date().getSeconds();
  }
}
