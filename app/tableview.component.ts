import { Component} from 'angular2/core';
import {HttprequestService} from './httprequest.service';
@Component({
  selector: 'tableview',
  templateUrl: 'app/tableview.component.html',
  styleUrls: ['app/tableview.component.css']
})
export class TableviewComponent{

  constructor(private httpRequestService: HttprequestService) { }
  Runs;
  ngOnInit() {
    this.httpRequestService.getAllRuns(1).subscribe(response => {
      console.log("in the table view");
      console.log(response);
      this.Runs = response;
      console.log("the runs are");
      console.log(this.Runs);
    });
  }

}
