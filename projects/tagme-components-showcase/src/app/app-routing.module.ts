import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CountersComponent } from './pages/counters/counters.component';
import { IconsComponent } from './pages/icons/icons.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'counters',
    component: CountersComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
