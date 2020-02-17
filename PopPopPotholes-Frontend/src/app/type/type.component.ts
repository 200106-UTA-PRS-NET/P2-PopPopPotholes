import { Component, OnInit } from '@angular/core';
import {Issue} from '../issue';
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  isSubmitted = false;
  constructor(private issueService: IssueService, private router: Router) { }
  issue: Issue; //TODO connect to ISSUE SERVICE
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      this.issue.type = form.value;
      this.issueService.setType(this.issue.type)
      this.router.navigateByUrl('/severity');
    }
  }

  ngOnInit(): void {
    this.getIssue();
  }
  getIssue(): void {
    this.issueService.getIssue()
        .subscribe(issue => this.issue = issue);
  }

}
