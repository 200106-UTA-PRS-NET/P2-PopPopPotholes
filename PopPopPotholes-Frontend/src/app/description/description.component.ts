import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue'
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  isSubmitted = false;
  issue: Issue; //TODO connect to ISSUE SERVICE
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      this.issue.description = form.value;
      this.issueService.setDescription(this.issue.description);
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
