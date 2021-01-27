import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  @Output() add:EventEmitter<Show> = new EventEmitter();
  showID:number;
  @Input() showName:string;
  @Input() showRate:number;
  @Input() showIMG:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const searchInput = {
      id: this.showID,
      title: this.showName,
      rating: this.showRate,
      is_Added: true,
      url: "https://www.imdb.com",
      img: this.showIMG
    }
    if(this.showName === '' || this.showRate == null || this.showIMG === ''){
      alert('Error:  Please Fill Out All Input Fields');
    } else {
      this.add.emit(searchInput);
    }
    this.showName = '';
    this.showRate = null;
    this.showIMG = '';
  };
};
