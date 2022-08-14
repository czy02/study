import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorenComponent } from './moren/moren.component';
import { BoughtComponent } from './bought/bought.component';
import { CaogaoComponent } from './caogao/caogao.component';
import { WillinComponent } from './willin/willin.component';
import { PartinComponent } from './partin/partin.component';
import { BackComponent } from './back/back.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MorenComponent,
    BoughtComponent,
    CaogaoComponent,
    WillinComponent,
    PartinComponent,
    BackComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
