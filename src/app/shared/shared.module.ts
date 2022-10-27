import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MapComponent } from './component/map/map.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [MapComponent]
})
export class SharedModule { }
