import { Injectable } from '@angular/core';
import { Data } from './dataFormet';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class DataService {
   Books:Array<any>=[];
  constructor(private http:Http) { }

  dataCheck(){
    return this.http.get("https://data.gov.in/node/85778/datastore/export/json") .map(result => this.Books = result.json());
  }

}
