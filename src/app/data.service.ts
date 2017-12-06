import { Injectable } from '@angular/core';
import { Post } from './dataFormet';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
  data: any[];
   url='https://data.gov.in/node/85778/datastore/export/json';
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get<Post>(this.url);
  }
}
