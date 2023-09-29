import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeyPatrickComponent } from './components/hey-patrick/hey-patrick.component';
import { PatricksHomeComponent } from './components/patricks-home/patricks-home.component';
import { PatricksRouterComponent } from './components/patricks-router/patricks-router.component';

const routes: Routes = [
  {
    path: '',
    component: PatricksHomeComponent
  },
  {
    path: 'router',
    component: PatricksRouterComponent,
    children: [
      {
        path: 'hey-patrick',
        component: HeyPatrickComponent
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingRoutingModule { }
