import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {PermissionGridComponent} from './components/permission-grid/permission-grid.component';
import {StudentListComponent} from './components/student/studentList.component';
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
        component: StudentListComponent,
      },
      {
        path: 'permissions/:userId',
        component: PermissionGridComponent
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
