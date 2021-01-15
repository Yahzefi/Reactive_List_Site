import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AddShowComponent } from './Components/add-show/add-show.component';
import { RecommendationsComponent} from './Components/recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddShowComponent,
    RecommendationsComponent
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
