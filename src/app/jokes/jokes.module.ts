import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JokesComponent } from './jokes.component';
import { jokesRoutes } from './jokes.routes';
import { MySharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    MySharedModule,
    RouterModule.forChild(jokesRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class JokesModule { }
