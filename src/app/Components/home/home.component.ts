import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { ShowService } from 'src/app/Services/show.service';
import { Show } from "../../Interfaces/Show";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // showArray:Show[];
  show:any;
  showList:any;

  constructor(private ss:ShowService) { }

  ngOnInit(): void {
    this.showList = this.ss.sendList();
    // for(let i=0; i<this.showList.length;i++){
    //   this.showArray.push(this.showList[i]);
    // }
  }

}
