import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routingandpipes',
  templateUrl: './routingandpipes.component.html',
  styleUrls: ['./routingandpipes.component.css']
})
export class RoutingandpipesComponent implements OnInit {
  datevalue=new Date();
  students=[{name:'ramesh',age:23,place:'mandya'},
{name:'suresh',age:22,place:'mizoram'},
{name:'kamesh',age:26,place:'kamnahllli'},];
  constructor() { }

  ngOnInit(): void {
  }

}
