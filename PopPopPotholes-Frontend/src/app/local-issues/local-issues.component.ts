import { Component, OnInit } from '@angular/core';
import {Issue} from '../issue';
import { IssueService } from '../issue.service'

@Component({
  selector: 'app-local-issues',
  templateUrl: './local-issues.component.html',
  styleUrls: ['./local-issues.component.css']
})
export class LocalIssuesComponent implements OnInit {

  issues: Issue[] = [];
  issue: Issue;
  constructor(private issueService: IssueService) { }

  setCoords(lat: number, long: number){
    this.issue.latitude = lat;
    this.issue.longitude = long;
  }
  getPosition(){
    navigator.geolocation.getCurrentPosition(function(position){
      this.setCoords(position.coords.latitude, position.coords.longitude)
    });
  }

  ngOnInit(): void {
    this.getPosition();
    this.getIssues(this.issue.latitude, this.issue.longitude)
  }
  filterIssues(Latitude: number, Longitude: number){
    
  }
  getIssues(Latitude: number, Longitude: number){
    this.issueService.getIssues()
        .subscribe(issues => this.issues = issues);
    this.filterIssues(Latitude, Longitude);
  }
}
