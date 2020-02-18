import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';
import { Issue } from '../issue';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.css']
})
export class DisplayIssuesComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }
  issues: Issue[] = [];


  getIssues(){
    this.issueService.getIssues()
        .subscribe(issues => this.issues = issues);
  }
  ngOnInit(): void {
    this.getIssues()
  }

}
