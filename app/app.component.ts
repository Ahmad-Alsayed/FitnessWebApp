import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UserComponent} from './user.component';
import {LoginComponent} from './login.component';
import {TableviewComponent} from './tableview.component';
import {NewrunComponent} from './newrun.component';
@RouteConfig([
    {path:'/',component:LoginComponent,name:'Login'},
    {path:'/home' , component: UserComponent,name : 'Home'},
    {path:'/all',component:TableviewComponent,name:'TableView'},
    {path:'/new',component:NewrunComponent,name:'NewRunningSession'}
    
])
@Component({
    selector:'myapp',
    directives:[ROUTER_DIRECTIVES], 
    templateUrl:'app/app.component.html',
    styleUrls:['app/app.component.css']
})
export class AppComponent{
   
}
