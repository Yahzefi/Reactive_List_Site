import { Injectable } from '@angular/core';

import show_list from "../../assets/recommendations.json";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  fullShowList:any = show_list;
  constructor() { }

  sendList(){
    return this.fullShowList;
  }
}
