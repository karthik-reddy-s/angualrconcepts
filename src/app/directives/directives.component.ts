import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
isActive=false;
students=[{name:'ramesh',age:23,place:'mandya'},
{name:'suresh',age:22,place:'mizoram'},
{name:'kamesh',age:26,place:'kamnahllli'},];
isSpecial=false;
  constructor() { }

  ngOnInit(): void {
  }
  getcolor(place){
    switch(place){
    case 'mandya':return 'green';
    case 'mizoram':return 'yellow';
    case 'kamnahllli':return 'pink';

  }}

}
