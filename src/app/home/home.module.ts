import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { FirstEntryComponent } from './first-entry/first-entry.component';
import { SecondEntryComponent } from './second-entry/second-entry.component';
import { MySharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    FirstEntryComponent,
    SecondEntryComponent
  ],
  imports: [
    MySharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
