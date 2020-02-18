import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from './issue'
import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issue = <Issue> {};
  Issues: Issue[] = []; //TEMP
  constructor() { }
  getIssue(){

    return of(this.issue);
  }
  setSeverity(severity: string){
    this.issue.severity = severity;
    return null;
  }
  setType(type: string){
    this.issue.type = type;
    return null;
  }
  setDescription(description: string){
    this.issue.description = description;
    return null;
  }
  getIssues(){
    //TODO CONNECT TO AZURE
    return of(this.Issues) //TEMP
  }
  setPosition(lat: number, long: number){
    this.issue.latitude = lat;
    this.issue.longitude = long;

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
