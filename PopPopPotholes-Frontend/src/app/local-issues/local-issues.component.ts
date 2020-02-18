import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-local-issues',
  templateUrl: './local-issues.component.html',
  styleUrls: ['./local-issues.component.css']
})
export class LocalIssuesComponent implements OnInit {

  isSubmitted = false;
  issues: Issue[] = [];
  issue = <Issue>{};
  value: string;
  constructor(private issueService: IssueService, private router: Router) { }

  setCoords(lat: number, long: number){
    this.issue.latitude = lat;
    this.issue.longitude = long;
  }
  getPosition(){
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position){
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      debugger;

      that.setCoords(latitude, longitude)
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
  //issueid=1
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    this.value = stringify(form.value)
    this.value = this.value.replace("issueid=",'')
    //alert(this.value)
    if(!form.valid) {
      return false;
    } else {
      if(+this.value == -1){
        this.issueService.setPosition(this.issue.latitude, this.issue.longitude)
        this.router.navigateByUrl('/type');
      }
      else{
        this.issueService.incrementCount(+this.value);
        this.router.navigateByUrl('/thankyou');
      }
    }
  }
}
