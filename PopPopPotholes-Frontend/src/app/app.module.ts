import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { SeverityComponent } from './severity/severity.component';
import { TypeComponent } from './type/type.component';
import { LocalIssuesComponent } from './local-issues/local-issues.component';
import { LandingComponent } from './landing/landing.component';
import { DescriptionComponent } from './description/description.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

import { HttpClientModule } from '@angular/common/http';
import { DisplayIssuesComponent } from './display-issues/display-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    IssueDetailComponent,
    SeverityComponent,
    TypeComponent,
    LocalIssuesComponent,
    LandingComponent,
    DescriptionComponent,
    ConfirmationComponent,
    ThankYouComponent,
    DisplayIssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
