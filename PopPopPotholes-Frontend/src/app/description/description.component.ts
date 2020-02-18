import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue'
import { NgForm } from '@angular/forms';
import { IssueService } from '../issue.service'
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }
  value: string;
  isSubmitted = false;
  issue = <Issue>{}; 
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    this.value = stringify(form.value)
    this.value = this.value.replace("description=",'')
    for(var i =0;i<50;i++){
      this.value = this.value.replace("%20",' ')
    }
    for(var i =0;i<50;i++){
      this.value = this.value.replace("%2C",',')
    }
    if(!form.valid) {
      return false;
    } else {
      this.issue.issueDescription = this.value;
      this.issueService.setDescription(this.value);
      this.router.navigateByUrl('/confirmation');
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
