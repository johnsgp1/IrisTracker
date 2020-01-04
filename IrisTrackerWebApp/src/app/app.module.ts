import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {DemoMaterialModule} from './material/material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { IssueListComponent } from './home/issue-list/issue-list.component';
import { IssueDetailsComponent } from './home/issue-details/issue-details.component';
import { AddNewIssueComponent } from './home/add-new-issue/add-new-issue.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JwPaginationComponent,
    IssueListComponent,
    IssueDetailsComponent,
    AddNewIssueComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
