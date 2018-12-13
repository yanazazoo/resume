import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeEditorComponent } from './resume-editor/resume-editor.component';
import { ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResumeBoxComponent } from './resume-box/resume-box.component';
import { ResumeCardComponent } from './resume-card/resume-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeEditorComponent,
    HomeComponent,
    NotFoundComponent,
    ResumeBoxComponent,
    ResumeCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
