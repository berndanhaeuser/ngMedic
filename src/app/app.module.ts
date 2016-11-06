import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SdktestComponent } from './sdktest/sdktest.component';
import {CommonModule} from "@angular/common";
import {SDKModule} from "./shared/sdk/index";
import {RouterModule} from "@angular/router";
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import {MdlModule, MdlDialogOutletService} from "angular2-mdl";
import { StartPageComponent } from './start-page/start-page.component';
import { IndextestComponent } from './indextest/indextest.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PrimengdtComponent } from './primengdt/primengdt.component';
import {DataTableModule} from "primeng/components/datatable/datatable";

@NgModule({
  declarations: [
    AppComponent,
    SdktestComponent,
    RouteNotFoundComponent,
    StartPageComponent,
    IndextestComponent,
    PersonDetailComponent,
    PrimengdtComponent
  ],
  imports: [
    BrowserModule,
      DataTableModule,
    FormsModule,
    HttpModule,
    CommonModule,
    SDKModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/start', pathMatch: 'full'},
      { path: 'start', component: StartPageComponent },
      { path: 'persons', component: PrimengdtComponent },
      { path: 'persons/:id', component: PersonDetailComponent },
      { path: 'test', component: IndextestComponent },
      { path: 'primengdt', component: PrimengdtComponent },
      { path: '**', component: RouteNotFoundComponent }
    ]),
      MdlModule
  ],
  providers: [MdlDialogOutletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
