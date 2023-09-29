import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeyPatrickComponent } from './components/hey-patrick/hey-patrick.component';
import { PatricksHomeComponent } from './components/patricks-home/patricks-home.component';
import { PatricksRouterComponent } from './components/patricks-router/patricks-router.component';
import { LazyRoutingRoutingModule } from './lazy-routing-routing.module';


@NgModule({
  declarations: [
    HeyPatrickComponent,
    PatricksHomeComponent,
    PatricksRouterComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingRoutingModule
  ]
})
export class LazyRoutingModule { }
