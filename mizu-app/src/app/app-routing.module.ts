import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/adminView/admin/admin.component';
import { ChangeEmailGridComponent } from './components/settingsView/change-email-grid/change-email-grid.component';
import { ChangePasswordGridComponent } from './components/settingsView/change-password-grid/change-password-grid.component';
import { EmployeeGridComponent } from './components/adminView/employee-grid/employee-grid.component';
import { HelpGridComponent } from './components/settingsView/help-grid/help-grid.component';
import {HomeComponent} from './components/home/home.component';
import { LoginHistoryComponent } from './components/adminView/login-history/login-history.component';
import {LoginComponent} from './components/login/login.component';
import {PermissionGridComponent} from './components/adminView/permission-grid/permission-grid.component';
import { SettingsComponent } from './components/settingsView/settings/settings.component';
import {StudentGridComponent} from './components/adminView/student-grid/student-grid.component';
import { UserInformationGridComponent } from './components/settingsView/user-information-grid/user-information-grid.component';
import { UserPreferencesGridComponent } from './components/settingsView/user-preferences-grid/user-preferences-grid.component';
import {AuthenticationGuard} from './helpers/authentication.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'students',
        component: StudentGridComponent,
      },
      {
        path: 'employee',
        component: EmployeeGridComponent
      },
      {
        path: 'permissions/:userId',
        component: PermissionGridComponent
      },
      {
        path: 'loginHistory',
        component: LoginHistoryComponent
      }
    ]

  },
  {
    path: 'login', component: LoginComponent
  }
  ,
  {
    path: 'settings', component: SettingsComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'information',
        component: UserInformationGridComponent
      },
      {
        path: 'email',
        component: ChangeEmailGridComponent
      },
      {
        path: 'password',
        component: ChangePasswordGridComponent
      },
      {
        path: 'preferences',
        component: UserPreferencesGridComponent
      },
      {
        path: 'help',
        component: HelpGridComponent
      }  
          
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
