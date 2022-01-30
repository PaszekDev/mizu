import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PermissionDirective} from './helpers/permission.directive';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AdminComponent} from './components/admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
// import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {HomeComponent} from './components/home/home.component';
import {StudentListComponent} from './components/student/studentList.component';
import {PermissionGridComponent} from './components/permission-grid/permission-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdminComponent,
    PermissionDirective,
    StudentListComponent,
    HomeComponent,
    PermissionGridComponent,
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
