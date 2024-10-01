import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { authReducer } from './state/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth/auth.effects';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, StoreModule.forRoot({ auth: authReducer }), EffectsModule.forRoot([AuthEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }