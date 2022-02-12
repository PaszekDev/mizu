import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionDirective } from './helpers/permission.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/adminView/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import { HomeComponent } from './components/home/home.component';
import { PermissionGridComponent } from './components/adminView/permission-grid/permission-grid.component';
import { StudentGridComponent } from './components/adminView/student-grid/student-grid.component';
import { LoginHistoryComponent } from './components/adminView/login-history/login-history.component';
import { UserSelectorComponent } from './components/user-selector/user-selector.component';
import { EmployeeGridComponent } from './components/adminView/employee-grid/employee-grid.component';
import { MizuTableComponent } from './components/mizu-table/mizu-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomizeTableDialogComponent } from './dialog/customize-table-dialog/customize-table-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SettingsComponent } from './components/settingsView/settings/settings.component';
import { UserInformationGridComponent } from './components/settingsView/user-information-grid/user-information-grid.component';
import { ChangeEmailGridComponent } from './components/settingsView/change-email-grid/change-email-grid.component';
import { ChangePasswordGridComponent } from './components/settingsView/change-password-grid/change-password-grid.component';
import { UserPreferencesGridComponent } from './components/settingsView/user-preferences-grid/user-preferences-grid.component';
import { HelpGridComponent } from './components/settingsView/help-grid/help-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdminComponent,
    PermissionDirective,
    StudentGridComponent,
    HomeComponent,
    PermissionGridComponent,
    LoginHistoryComponent,
    UserSelectorComponent,
    EmployeeGridComponent,
    MizuTableComponent,
    CustomizeTableDialogComponent,
    SettingsComponent,
    UserInformationGridComponent,
    ChangeEmailGridComponent,
    ChangePasswordGridComponent,
    UserPreferencesGridComponent,
    HelpGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  // providers: [
  //   {
  //     provide: InjectableRxStompConfig,
  //     useValue: myRxStompConfig,
  //   },
  //   {
  //     provide: RxStompService,
  //     useFactory: rxStompServiceFactory,
  //     deps: [InjectableRxStompConfig]
  //   }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
