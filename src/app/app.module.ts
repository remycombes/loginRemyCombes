import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { StoreModule }          from '@ngrx/store';
import { EffectsModule }        from '@ngrx/effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { SharedModule }         from './shared/shared.module';
import { reducers }             from './store/state.model';
import { AuthEffects }          from './store/auth/auth.effects';
import { MaterialModule }       from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule, 
    StoreModule.forRoot(reducers), 
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
