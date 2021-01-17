import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


import show_list from "../../../assets/recommendations.json";
import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  @Output() sendList: EventEmitter<any> = new EventEmitter();
  item:Show;
  fullList:Show = show_list;

  constructor() { }

  ngOnInit(): any {
    // this.sendList.emit(this.fullList);
  }



}
