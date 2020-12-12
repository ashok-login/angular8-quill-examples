import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillExample01Component } from './quill-example01/quill-example01.component';
import { QuillExample02Component } from './quill-example02/quill-example02.component';
import { QuillExample03Component } from './quill-example03/quill-example03.component';

@NgModule({
  declarations: [
    AppComponent,
    QuillExample01Component,
    QuillExample02Component,
    QuillExample03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
