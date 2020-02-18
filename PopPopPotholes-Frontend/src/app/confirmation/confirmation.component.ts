import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue'
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  isSubmitted = false;
  issue = <Issue> {};
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      this.issueService.createIssue(this.issue as Issue).subscribe();
      this.router.navigateByUrl('/thank-you');
    }
  }
  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit(): void {
    this.getIssue();
  }
  getIssue(): void {
    this.issueService.getIssue()
        .subscribe(issue => this.issue = issue);
  }

}
