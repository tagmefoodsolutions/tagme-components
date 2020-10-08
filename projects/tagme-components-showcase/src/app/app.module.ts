import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule, CounterModule, IconModule, LinkModule } from 'tagme-components';

import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CountersComponent } from './pages/counters/counters.component';
import { IconsComponent } from './pages/icons/icons.component';
import { LinksComponents } from './pages/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    CountersComponent,
    IconsComponent,
    LinksComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CounterModule,
    IconModule,
    LinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
