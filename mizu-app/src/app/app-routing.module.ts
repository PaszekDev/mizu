import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';
import {HomeComponent} from './components/home/home.component';
import { LoginHistoryComponent } from './components/login-history/login-history.component';
import {LoginComponent} from './components/login/login.component';
import {PermissionGridComponent} from './components/permission-grid/permission-grid.component';
import {StudentGridComponent} from './components/student-grid/student-grid.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
