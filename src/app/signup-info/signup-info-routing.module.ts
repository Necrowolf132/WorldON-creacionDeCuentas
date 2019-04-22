import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartelComponent } from './cartel/cartel.component';
import {BienvenidaSignup2Component} from './bienvenida-signup2.component';


const routes: Routes = [
    {
        path: '',
        component:  BienvenidaSignup2Component,
        children: [
            { path: '', redirectTo: 'InfoComponent', pathMatch: 'prefix' },
            { path: 'InfoComponent', component: CartelComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupInfoRoutingModule { }
