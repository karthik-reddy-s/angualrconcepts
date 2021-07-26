import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }
  title="property binding";
  t1="practising";
  t2="data binding";
  t3="event binding";
  t4="2waybinding";
ngOnInit(){}
changedata(){
 this.title="event binding";
}
  

}
