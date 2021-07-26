import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import{ HttpClient} from '@angular/common/http'
const API_URL=environment.apiURL;
const STUDENTS='/api/employee/departmentst';
const POST_Employee='/api/employee/createnewemployee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient:HttpClient) { }
  
  getData(){
    return this.httpClient.get(`${API_URL}${STUDENTS}`);
  }
}
