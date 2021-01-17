import { Component, OnInit, Input } from '@angular/core';

import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  @Input() item:Show;

  constructor() { }

  ngOnInit(): any {
  }

  setClasses() {
    let classes = {
      'title-text': true
    }
    return classes;
  }

}
