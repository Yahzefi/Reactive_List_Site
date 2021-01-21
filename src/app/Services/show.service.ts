import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Show } from "../Interfaces/Show";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  jsonURL:string = '/assets/recommendations.json'

  constructor(private http:HttpClient) { }

  sendList():Observable<Show[]>{
    return this.http.get<Show[]>(this.jsonURL);
  }

  newShow(item:Show):Promise<Show>{
    return new Promise(resolve=>resolve(item))
  }
}
