import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {
  @Output() search:EventEmitter<any> = new EventEmitter();
  @Input() inputText:string;
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp() {
    this.search.emit(this.inputText);
  }
}
