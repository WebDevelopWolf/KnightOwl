import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { KnightOwlAppComponent } from './KnightOwlApp/KnightOwlApp.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ToastNotificationsModule } from 'ngx-toast-notifications';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginComponent,
      HomeComponent,
      KnightOwlAppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ToastNotificationsModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
