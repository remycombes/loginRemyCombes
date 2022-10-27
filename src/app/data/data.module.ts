import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { GeolocationService } from './service/geolocation/geolocation.service';
import { LoginService } from './service/login/login.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HttpClientModule
  ], 
  providers:[
    GeolocationService, 
    LoginService
  ]
})
export class DataModule { }
