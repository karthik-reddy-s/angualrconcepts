import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-httpreq',
  templateUrl: './httpreq.component.html',
  styleUrls: ['./httpreq.component.css']
})
export class HttpreqComponent implements OnInit {
  dps: any;
  constructor(private crudservice: CrudService, private router: Router) { }


  ngOnInit(): void {
    this.crudservice.getData().subscribe(data => { console.log(data); this.dps= data; }, (err => { console.log(err); }))
  }

}
