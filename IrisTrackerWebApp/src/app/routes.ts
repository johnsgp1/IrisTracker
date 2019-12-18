import{Routes} from '@angular/router';
import{LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IssueListComponent } from './home/issue-list/issue-list.component';
import { IssueDetailsComponent } from './home/issue-details/issue-details.component';

export const appRoutes:Routes=[
   {path:'Home',component:HomeComponent,
   children:[
       {
           outlet:'home',
           path:'IssueList',
           component: IssueListComponent
       },
       {
           outlet:'home',
           path:'IssueDetails',
           component:IssueDetailsComponent
       }
   ]
},
   {path:'login',component:LoginComponent,pathMatch:'full'},
   {path:'',redirectTo:'/login',pathMatch:'full'},
];