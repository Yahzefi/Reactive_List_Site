import { Component, OnInit, Input } from '@angular/core';
import { ShowService } from "../../Services/show.service";

import { Top_Shows } from "../../Interfaces/Top_Shows";

@Component({
  selector: 'app-top-shows',
  templateUrl: './top-shows.component.html',
  styleUrls: ['./top-shows.component.css']
})
export class TopShowsComponent implements OnInit {
  topShows:Top_Shows[];
  sel_Show:Top_Shows;
  constructor(private ss:ShowService) { }

  ngOnInit(): void {
    this.ss.sendTopShows().subscribe(data=>this.topShows=data);
  }
}
