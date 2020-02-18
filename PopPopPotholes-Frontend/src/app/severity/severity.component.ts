import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  value: string;
  issue = <Issue>{};
  isSubmitted = false;
  constructor(private issueService: IssueService, private router: Router) { }
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    this.value = stringify(form.value)
    this.value = this.value.replace("severity=",'')
    if(!form.valid) {
      return false;
    } else {
      this.issueService.setSeverity(this.value)
      this.router.navigateByUrl('/description');
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
