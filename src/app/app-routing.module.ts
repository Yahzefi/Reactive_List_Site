import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../app/Components/home/home.component";
import { TopShowsComponent } from './Components/top-shows/top-shows.component';
import { CurrentlyAiringComponent } from "./Components/currently-airing/currently-airing.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'top_shows', component: TopShowsComponent},
  {path: 'currently_airing', component: CurrentlyAiringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
