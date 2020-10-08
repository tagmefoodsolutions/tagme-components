import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'tagme-components';
import { CounterModule } from 'tagme-components';
import { IconModule } from 'tagme-components';

import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CountersComponent } from './pages/counters/counters.component';
import { IconsComponent } from './pages/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    CountersComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CounterModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
