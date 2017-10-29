import { Injectable } from 'angular2/core';
import {Router} from 'angular2/router';
@Injectable()
export class NavigationService {

constructor(private router: Router) { }
loginScreen(){
    this.router.navigateByUrl('/');
}

homeScreen(){
    this.router.navigateByUrl('/home');
}

tableView(){
    this.router.navigateByUrl('/all');
}

createNewRun(){
    this.router.navigateByUrl('/new');
}

}