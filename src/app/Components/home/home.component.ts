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
    .then(list=>this.showList=list);
  }

  addShow (title:Show){
    this.ss.newShow(title)
    .then((item)=>{
      this.listLength=this.showList.length;
      this.listLength++;
      item.id=this.listLength;
      return item;
    })
    .then((item)=>{
      this.showList.push(item)
    })
    .then(()=>console.log(this.showList));
  }
}
