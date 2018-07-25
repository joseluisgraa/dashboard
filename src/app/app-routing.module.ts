import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QualificationsComponent }      from './components/qualifications/qualifications.component';
import { DashboardComponent }           from './components/dashboard/dashboard.component';
import { QualificationDetailComponent } from './components/qualification-detail/qualification-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'qualifications', component: QualificationsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: QualificationDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}