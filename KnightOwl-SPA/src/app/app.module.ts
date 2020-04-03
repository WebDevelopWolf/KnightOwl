// Angular & 3rd Part Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { RouterModule } from '@angular/router';
// Providers
import { ErrorInterceptorProvider } from './_services/error.interceptor';
// Services
import { AuthService } from './_services/auth.service';
import { ModuleService } from './_services/module.service';
// Components
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubnavComponent } from './subnav/subnav.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginComponent,
      DashboardComponent,
      SubnavComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ToastNotificationsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      ModuleService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
