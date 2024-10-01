import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: DashboardComponent,
        children:[
            {
            path: 'dashboard',
            component: DashboardComponent
            }
        ]
    }
];


//Docuentar instalación del entorno comandos y pasos