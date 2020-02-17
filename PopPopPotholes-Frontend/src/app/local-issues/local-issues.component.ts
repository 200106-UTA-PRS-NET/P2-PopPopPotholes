import { Component, OnInit } from '@angular/core';
import {Issue} from '../issue';
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-issues',
  templateUrl: './local-issues.component.html',
  styleUrls: ['./local-issues.component.css']
})
export class LocalIssuesComponent implements OnInit {

  isSubmitted = false;
  issues: Issue[] = [];
  issue: Issue;
  constructor(private issueService: IssueService, private router: Router) { }

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
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      if(form.value == -1){;
        this.router.navigateByUrl('/type');
      }
      else{
        this.issueService.incrementCount(form.value);
        this.router.navigateByUrl('/thankyou');
      }
      
    }
  }
}
