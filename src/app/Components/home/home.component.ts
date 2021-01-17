import { Component, OnInit } from '@angular/core';

import { ShowService } from 'src/app/Services/show.service';
import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showArray:Show;

  constructor(private ss:ShowService) { }

  ngOnInit(): void {
    // this.showList = this.ss.sendList();
  }

}
