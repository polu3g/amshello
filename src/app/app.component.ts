import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
})
export class AppComponent {
	myapidata: any;
constructor(private http:HttpClient) {
	
	this.http.get('/apihost').subscribe((_data: any) => {
               
            this.myapidata = _data['value']['joke'];
            },
            (err: any) => {

            });
	
    }
	
}
