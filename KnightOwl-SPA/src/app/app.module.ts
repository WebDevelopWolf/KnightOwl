// Angular & 3rd Part Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
// Providers
import { ErrorInterceptorProvider } from './_services/error.interceptor';
// Services
import { AuthService } from './_services/auth.service';
import { NavService } from './_services/nav.service';
import { AnimalService } from './_services/animal.service';
// Components
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubnavComponent } from './subnav/subnav.component';
import { CommonModule } from '@angular/common';
import { AnimalsComponent } from './animals/animals/animals.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginComponent,
      DashboardComponent,
      SubnavComponent,
      AnimalsComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ToastNotificationsModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            // tslint:disable-next-line: object-literal-shorthand
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      NavService,
      AnimalService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
