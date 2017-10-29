import { Injectable } from 'angular2/core';
import {Http,Headers} from 'angular2/http';
import {NavigationService} from './navigation.service';
import 'rxjs/add/operator/map';
@Injectable()
export class HttprequestService {

constructor(private http: Http,private navigator: NavigationService) { }
getAllRuns(userid){
    let username: string = sessionStorage.getItem('username');
    let password: string = sessionStorage.getItem('password');
    let headers: Headers = new Headers();
    
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    //headers.append("Access-Control-Allow-Origin","*");
    headers.append("Content-Type", "plain/text");
    //application/x-www-form-urlencoded
    let url = "http://127.0.0.1:8080/api/test/FindAllRuns/"+userid;
    return this.http.get(url,{headers: headers}).map(response => {
        console.log(response.json());
        return response.json();
    })  
}

createNewRun(runModel){
    let url = "http://127.0.0.1:8080/api/test/CreateRun";
    let username: string = sessionStorage.getItem('username');
    let password: string = sessionStorage.getItem('password');
    let headers: Headers = new Headers();
    
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("Content-Type", "application/json");
    return this.http.post(url,JSON.stringify(runModel),{headers: headers})
    .map(response => {});
    

}
}