import { Component, OnInit } from 'angular2/core';
import {HttprequestService} from './httprequest.service';
import {NavigationService} from './navigation.service';
@Component({
  selector: 'app-newrun',
  templateUrl: 'app/newrun.component.html',
  styleUrls: ['app/newrun.component.css']
})
export class NewrunComponent implements OnInit {

  constructor(private httpRequestService: HttprequestService,private navigator: NavigationService) { }

  ngOnInit() {
  }
  onSubmit(runModel){
    console.log(runModel.distance);
    console.log(runModel.duration);
    console.log(runModel.date);
    runModel.user_id = 1;
    this.httpRequestService.createNewRun(runModel).subscribe(response =>{
      this.navigator.tableView();
    });

    


  }

}
