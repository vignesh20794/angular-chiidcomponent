import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { listComponent } from './list/list.component';
import { serverComponent } from './server/server.component';
import { ListCreate } from './list/list-create-component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent,serverComponent,listComponent,ListCreate],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
