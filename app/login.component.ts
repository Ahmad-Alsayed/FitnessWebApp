import { Component } from 'angular2/core';
import {Http,Headers} from 'angular2/http';
import {LoginService} from './login.service';
import {SecretService} from './secret.service';
import {NavigationService} from './navigation.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css']
})
export class LoginComponent{

  constructor(private http:Http,private loginService: LoginService,private secretService: SecretService, private navigator: NavigationService){ 
    
      }
      ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log("in the login screen");
        console.log(sessionStorage.getItem('token'));
        if (sessionStorage.getItem('token') !== null){ // user already logged in
          this.navigator.homeScreen();
            }
      }
          
        private token;
        onSubmit(loginInfo){
          this.loginService.login(loginInfo).subscribe(response => { // handle successful request response
            this.token = response;
            console.log("testttt");
            this.secretService.saveToken(response);
            sessionStorage.setItem('token',response);
            sessionStorage.setItem('username',loginInfo.username);
            sessionStorage.setItem('password',loginInfo.password);
            this.navigator.homeScreen();
            
            console.log(this.secretService.getToken());
          });
          console.log("hello");
          
          //console.log("secret service");
          //console.log(this.secretService.getToken());
          
        }

}
