import { Component, OnInit } from '@angular/core';

import { ShowService } from 'src/app/Services/show.service';
import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showArray:Show[];
  showList:Show[];
  listLength:number;
  hide_Message:boolean;
  noResults:string;

  constructor(private ss:ShowService) { }

  ngOnInit(): void {
    this.noResults = 'No Results Found...';
    this.hide_Message = true;
    this.fillList();
  }

  fillList() {
    this.ss.sendList().subscribe(data=>{
      console.log(data[0].id);
      this.showArray=data;
      console.log(this.showArray);
      this.showList = this.showArray;
    });
  }

  addShow (title:Show){
    this.ss.newShow(title)
    .then((item)=>{
      this.listLength=this.showList.length;
      this.listLength++;
      item.id = this.listLength;
      item.is_Added = true;
      this.showList.forEach((token)=>{
        while(item.id <= token.id){
          item.id++;
        };
      });
      return item;
    })
    .then((item)=>{
      this.showList.push(item)
    });
  };

  deleteShow(item:Show){
    // Delete in DOM / UI
    this.showList = this.showList.filter(token=>token.id !== item.id);
    this.showArray = this.showArray.filter(token=>token.id !== item.id);
  };

  filterSearch(input:string) {
    let filteredList = [];
    this.showList.forEach((token)=>{
      if(token.title.includes(input) || input.charAt(0).toUpperCase() === token.title.charAt(0)){
        filteredList.push(token);
      };
    });
    if(input === ''){
      console.log(this.showArray);
      this.showList = this.showArray;
      this.hide_Message = true;
    } else if( input.length >= 0 && filteredList.length === 0){
      this.showList = filteredList;
      this.hide_Message = false;
    } else if ( filteredList.length > 0 || input.length >= 0 ) {
      this.showList = filteredList;
      this.hide_Message = true;
    }
  };
};
