import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastryListComponent } from './pastry-list/pastry-list.component';
import { PastryListDetailsComponent } from './pastry-list-details/pastry-list-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    PastryListComponent,
    PastryListDetailsComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
   MatToolbarModule,
   MatIconModule,
   MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
