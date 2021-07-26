import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{  title="property binding";
     t1="practising";
     t2="data binding";
     t3="event binding";
     t4="2waybinding";
  ngOnInit(){}
  changedata(){
    this.title="event binding";
  }
}
    
  

  

