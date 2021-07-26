import { Component } from '@angular/core';
import{TempformModel} from 'src/app/templatedriven/model/tempform.model';
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent{

  TempformModel=new TempformModel();
  submit(values){
    console.log(values);
  }
 
  
}
