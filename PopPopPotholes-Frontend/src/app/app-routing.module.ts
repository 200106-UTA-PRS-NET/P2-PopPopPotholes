import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeverityComponent } from './severity/severity.component';
import { LocalIssuesComponent } from './local-issues/local-issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { TypeComponent } from './type/type.component';
import { LandingComponent } from './landing/landing.component'
import { DescriptionComponent } from './description/description.component';
import { ConfirmationComponent} from './confirmation/confirmation.component'
import { ThankYouComponent } from './thank-you/thank-you.component'
import {DisplayIssuesComponent} from './display-issues/display-issues.component'

const routes: Routes = [
  { path: 'severity', component: SeverityComponent },
  { path: 'local-issues', component: LocalIssuesComponent},
  { path: 'detail/:id', component: IssueDetailComponent },
  { path: 'type', component: TypeComponent},
  { path: 'landing', component: LandingComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'description', component: DescriptionComponent},
  { path: 'confirmation', component: ConfirmationComponent},
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'display-issues', component: DisplayIssuesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
