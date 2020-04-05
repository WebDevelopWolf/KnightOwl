import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { AnimalsComponent } from './animals/animals/animals.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'dash', component: DashboardComponent},
            {path: 'animals', component: AnimalsComponent}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
