import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './components/empty/empty.component';
import { LazyRoutingModule } from './lazy-routing/lazy-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private readonly injector: Injector, private readonly router: Router) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mf-lazy-module-routing-element', ce);

    // this.router.navigate(['']);
    this.router.initialNavigation();
  }
}
