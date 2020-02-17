import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  
  isSubmitted = false;
  constructor(private issueService: IssueService) { }
  issue: Issue; //TODO connect to ISSUE SERVICE
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      this.issue.severity = form.value;
      this.issueService.setSeverity(this.issue.severity)
    }
  }
  getIssue(): void {
    this.issueService.getIssue()
        .subscribe(issue => this.issue = issue);
  }

  ngOnInit(): void {
    this.getIssue();
  }

}
