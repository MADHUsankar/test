import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component'

 
const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'Seattle',
        component: SeattleComponent
    },
        {
        path: 'Chicago',
        component: ChicagoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);