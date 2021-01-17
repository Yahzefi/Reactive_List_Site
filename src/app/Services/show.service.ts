import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Show } from "../Interfaces/Show";
import show_list from "../../assets/recommendations.json";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  show_list:Show[];
  constructor() { }

  sendList(item:Show[]):Promise<Show[]>{
    return new Promise (resolve=>{item=show_list;resolve(item)});
  }

  newShow(item:Show):Promise<Show>{
    return new Promise(resolve=>resolve(item))
  }
}
