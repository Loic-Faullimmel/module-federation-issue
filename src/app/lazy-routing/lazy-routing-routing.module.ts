import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeyPatrickComponent } from './components/hey-patrick/hey-patrick.component';

const routes: Routes = [
  {
    path: '',
    component: HeyPatrickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingRoutingModule { }
