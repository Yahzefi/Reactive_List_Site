import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  @Input() item:Show;
  @Output() delete:EventEmitter<Show> = new EventEmitter();

  constructor() { }

  ngOnInit(): any {
  }

  setClasses() {
    let classes = {
      'title-text': true
    }
    return classes;
  }

  removeItem(item:Show){
    this.delete.emit(item);
  }

}
