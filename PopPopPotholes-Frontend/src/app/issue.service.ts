import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from './issue'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issue: Issue;
  Issues: Issue[] = []; //TEMP
  constructor(private http: HttpClient) { }
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
  getIssueById(id: number){

  }
  incrementCount(id: number){
    //use get to get issue by id, increment upvotes by 1, patch or put issue
  }
  createIssue(issue:Issue){
    //use post method on API /issue
  }

}
