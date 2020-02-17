import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from './issue'

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issue: Issue;
  Issues: Issue[] = []; //TEMP
  constructor() { }
  getIssue(){

    return of(this.issue);
  }
  setSeverity(severity: string){
    this.issue.severity = severity;
  }
  setType(type: string){
    this.issue.type = type;
  }
  setDescription(description: string){
    this.issue.description = description;
  }
  getIssues(){
    //TODO CONNECT TO AZURE
    return of(this.Issues) //TEMP
  }
}
