import { Component, OnInit,EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired =new EventEmitter<number>(); //making intervalFired listnable from outside
  interval;
  lastNumer = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){

    this.interval =setInterval(()=>  //setinterval is a method from javascript for time intervals
    {this.intervalFired.emit(this.lastNumer +1)
    this.lastNumer++ },1000);
  }
  onPauseGame(){
    clearInterval(this.interval);  //clearInterval() from javascript
  }

}
