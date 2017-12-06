import { Injectable } from '@angular/core';
import { Data } from './dataFormet';
import { HttpClient } from '@angular/common/http';

interface Post {
  data:Array<any>;
 };

@Injectable()
export class DataService {
  data: any[];
   url='https://data.gov.in/node/85778/datastore/export/json';
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get<Post>(this.url);
  }
}
