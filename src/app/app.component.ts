import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
})
export class AppComponent {
	myapidata: any;
constructor(private http:HttpClient) {
	
	this.http.get('/testme').subscribe((_data: any) => {
               debugger
            this.myapidata = JSON.stringify(_data);
            },
            (err: any) => {

            });
	
    }
	
}
