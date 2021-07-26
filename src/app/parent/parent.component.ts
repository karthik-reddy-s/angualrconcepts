import { Component, OnInit } from '@angular/core';
import { DataService} from'../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
ptoc="";
ctop="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
recievedata(data){
this.ctop=data;
}
sendData(){
  this.dataService.changedata(this.ptoc);}
}

