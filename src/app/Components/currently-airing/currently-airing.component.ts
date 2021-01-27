import { Component, OnInit } from '@angular/core';
import { ShowService } from "../../Services/show.service";

import { AirShow } from "../../Interfaces/Air_Shows";

@Component({
  selector: 'app-currently-airing',
  templateUrl: './currently-airing.component.html',
  styleUrls: ['./currently-airing.component.css']
})
export class CurrentlyAiringComponent implements OnInit {
  airingShows:AirShow[];

  constructor(private ss:ShowService) { }

  ngOnInit(): void {
    this.ss.sendAirShows().subscribe(data=>this.airingShows=data);
  }
}
