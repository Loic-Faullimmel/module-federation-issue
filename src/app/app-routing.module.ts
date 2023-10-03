import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {
    path: 'lazy-route',
    loadChildren: () => import('./lazy-routing/lazy-routing.module').then(m => m.LazyRoutingModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: EmptyComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {urlUpdateStrategy: 'eager'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
