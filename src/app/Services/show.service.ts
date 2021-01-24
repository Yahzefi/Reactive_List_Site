import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Show } from "../Interfaces/Show";
import { Top_Shows } from "../Interfaces/Top_Shows";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  recJsonURL:string = '/assets/recommendations.json';
  topJsonURL:string = '/assets/top_2018_shows.json';

  constructor(private http:HttpClient) { }

  sendList():Observable<Show[]>{
    return this.http.get<Show[]>(this.recJsonURL);
  }

  newShow(item:Show):Promise<Show>{
    return new Promise(resolve=>resolve(item))
  }

  sendTopShows():Observable<Top_Shows[]>{
    return this.http.get<Top_Shows[]>(this.topJsonURL);
  }

}
