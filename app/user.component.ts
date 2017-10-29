import { Component } from 'angular2/core';
import {SecretService} from './secret.service';
import {NavigationService} from './navigation.service';
import {LoginService} from './login.service';
import {HttprequestService} from './httprequest.service';

@Component({
  selector: 'user',
  templateUrl: 'app/user.component.html',
  styleUrls: ['app/user.component.css']
})
export class UserComponent  {
constructor(private secretService: SecretService, private navigator: NavigationService,private loginService: LoginService,private httpRequestService: HttprequestService){

}
username = sessionStorage.getItem('username');
 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   console.log("in the user interface");
   console.log(sessionStorage.getItem('token'));
   if (sessionStorage.getItem('token') === null){
    this.navigator.loginScreen();
    
   }
   
 }
 onLogout(){
  sessionStorage.removeItem('token');
  this.navigator.loginScreen();
 }
onDisplayAllRuns(){
this.navigator.tableView();
 }

 onCreateNewRun(){
  this.navigator.createNewRun();
   }
}
