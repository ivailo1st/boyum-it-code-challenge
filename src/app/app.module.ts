import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
