import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { SignupInfoRoutingModule } from './signup-info-routing.module';
import { CartelComponent } from './cartel/cartel.component';
import { SignupFinalComponent } from './signup-final/signup-final.component';
import { BienvenidaSignup2Component } from './bienvenida-signup2.component';


@NgModule({
  imports: [
    CommonModule,
    SignupInfoRoutingModule,
    FormsModule
  ],
  declarations: [CartelComponent, SignupFinalComponent, BienvenidaSignup2Component],
 // exports: [CartelComponent, SignupFinalComponent, BienvenidaSignup2Component]
})
export class SignupInfoModule { }
