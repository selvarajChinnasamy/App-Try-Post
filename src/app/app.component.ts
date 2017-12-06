import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Data } from './dataFormet';
import 'rxjs/add/operator/map';
import{ DataService } from'./data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Book:Array<any>=[];
  constructor(private _dataService: DataService){
   this._dataService.dataCheck().subscribe(res=>{
     this.Book=res.data;
   });
  }
}
