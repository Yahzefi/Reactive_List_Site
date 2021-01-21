import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AddShowComponent } from './Components/add-show/add-show.component';
import { RecommendationsComponent} from './Components/recommendations/recommendations.component';
import { HeaderComponent } from './Components/header/header.component';
import { SearchShowComponent } from './Components/search-show/search-show.component';
import { CurrentlyAiringComponent } from './Components/currently-airing/currently-airing.component';
import { TopShowsComponent } from './Components/top-shows/top-shows.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddShowComponent,
    RecommendationsComponent,
    SearchShowComponent,
    HeaderComponent,
    CurrentlyAiringComponent,
    TopShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
