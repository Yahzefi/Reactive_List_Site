import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  @Output() add:EventEmitter<Show> = new EventEmitter();
  @Input() showName:string;
  showRating:number;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    let randDec = [0.25, 0.5, 0.75]
    this.showRating = Math.floor(Math.random()*10) + randDec[Math.floor(Math.random()*3)];
    
    const searchInput = {
      title: this.showName,
      rating: this.showRating,
      is_Added: true
    }
    console.log(searchInput);
  this.add.emit(searchInput);
  };
};
