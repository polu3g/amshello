import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World {{myapidata}}</h1>
  `
})
export class AppComponent {
	myapidata: any;
constructor(private http:HttpClient) {
	
	this.http.get('/apihost').subscribe((_data: any) => {
               
            this.myapidata = _data;
            },
            (err: any) => {

            });
	
    }
	
}
