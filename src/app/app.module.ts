import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
