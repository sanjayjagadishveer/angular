import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueDetailComponent } from './collegue-detail/collegue-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
