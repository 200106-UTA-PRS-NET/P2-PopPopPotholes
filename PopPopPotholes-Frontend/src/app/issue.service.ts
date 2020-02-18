import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Issue } from './issue'

import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issue = <Issue> {
    issueType: 'a',
    severity: 'b',
    cityId: 1,
    latitude: 0,
    longitude: 0,
    linkImg: 'string',
    issueDescription: 'd',
    issueStatus: 'pending',
    issueUpvotes: 1
  };
  issue2 = <Issue> {};
  Issues = <Issue[]> {}; 
  constructor(private http: HttpClient) { }
  getIssue(){

    return of(this.issue);
  }
  setSeverity(severity: string){
    this.issue.severity = severity;
    return null;
  }
  setType(type: string){
    this.issue.issueType = type;
    return null;
  }
  setDescription(description: string){
    this.issue.issueDescription = description;
    return null;
  }
  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('https://poppoppotholes.azurewebsites.net/api/issue')
  }
  setPosition(lat: number, long: number){
    this.issue.latitude = lat;
    this.issue.longitude = long;
  }
  getIssueById(id: number){
    return this.http.get<Issue>('https://poppoppotholes.azurewebsites.net/api/issue/{id}')
  }
  incrementCount(id: number){
  }
  createIssue(issue:Issue){
    this.issue.cityId=1;
    return this.http.post('https://poppoppotholes.azurewebsites.net/api/issue', issue)
  }

}
