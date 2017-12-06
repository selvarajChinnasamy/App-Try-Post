import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Array<any>=[];
  constructor(private http: HttpClient, private dataservice: DataService){
   this.dataservice.getData().subscribe(res => {
    console.log(res.data);
    this.data=res.data;
  });
  }
}
