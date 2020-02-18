import { Component, OnInit } from '@angular/core';
import {Issue} from '../issue';
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  isSubmitted = false;
  value: string;
  constructor(private issueService: IssueService, private router: Router) { }
  issue: Issue; //TODO connect to ISSUE SERVICE
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    this.value = stringify(form.value)
    this.value = this.value.replace("type=",'')
    //alert(this.value)
    if(!form.valid) {
      return false;
    } 
    else {
      this.issueService.setType(this.value);
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
