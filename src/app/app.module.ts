import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SdktestComponent } from './sdktest/sdktest.component';
import {CommonModule} from "@angular/common";
import {SDKModule} from "./shared/sdk/index";
import { PersonsComponent } from './persons/persons.component';
import {RouterModule} from "@angular/router";
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import {MdlModule} from "angular2-mdl";
import { StartPageComponent } from './start-page/start-page.component';
import { IndextestComponent } from './indextest/indextest.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {Person} from "./shared/sdk/models/Person";

@NgModule({
  declarations: [
    AppComponent,
    SdktestComponent,
    PersonsComponent,
    RouteNotFoundComponent,
    StartPageComponent,
    IndextestComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    SDKModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/start', pathMatch: 'full'},
      { path: 'start', component: StartPageComponent },
      { path: 'persons', component: PersonsComponent },
      { path: 'persons/:id', component: PersonDetailComponent },
      { path: 'test', component: IndextestComponent },
      { path: '**', component: RouteNotFoundComponent }
    ]),
      MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
