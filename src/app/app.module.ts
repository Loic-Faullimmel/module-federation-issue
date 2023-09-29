import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeyPatrickComponent } from './lazy-routing/components/hey-patrick/hey-patrick.component';
import { LazyRoutingModule } from './lazy-routing/lazy-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeyPatrickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
