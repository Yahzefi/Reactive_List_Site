import { Component, OnInit, Output } from '@angular/core';

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

  constructor(private ss:ShowService) { }

  ngOnInit(): void {
    this.fillList();
  }

  fillList(){
    this.ss.sendList(this.showArray)
    .then(list=>this.showArray=list)
    .then(array=>this.showList = array);
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

  deleteInDOM(item:Show){
    this.showList = this.showList.filter(token=>token.id !== item.id);
  };
};
