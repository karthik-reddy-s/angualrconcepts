import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() note;
username:string;
@Output() userNameEmitter = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
  }
  sendData(){
    this.userNameEmitter.emit(this.username);
  }

}
