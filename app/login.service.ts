import { Injectable } from 'angular2/core';
import {Http,Headers} from 'angular2/http';
import {SecretService} from './secret.service';
@Injectable()
export class LoginService {

constructor(private http: Http,private secretService: SecretService){

}


login(loginInfo){
    console.log(loginInfo);
    let username: string = loginInfo.username;
    let password: string = loginInfo.password;
    let headers: Headers = new Headers();
    let url = 'http://127.0.0.1:8080/api/test/GetAuthorizationToken'
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    //headers.append("Access-Control-Allow-Origin","*");
    headers.append("Content-Type", "plain/text");
    //application/x-www-form-urlencoded
    
    //return this.http.post(url, data, {headers: headers})
    return this.http.get(url,{headers: headers}).map(response => {
       console.log("get method");
        
       
        return response.json()});
    
}





}