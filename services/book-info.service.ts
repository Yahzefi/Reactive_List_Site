import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {

  constructor() { }

  returnBookInfo() {
    return [
      {
        title: "Hello to Paradise",
        author: 'Gavin Ross',
        yearPublished: 1987,
        is_Added: false
      },
      {
        title: "Goodbye Stagnation",
        author: "Rebecca Stein",
        yearPublished: 2003,
        is_Added: false
      }
    ];
  }
}
