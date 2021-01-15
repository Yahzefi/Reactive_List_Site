import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Book } from "../../types_dir/Book";
import { BookInfoService } from "../../services/book-info.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  x:number;
  // changedNum:number;
  bookChoice:Book[];
  // @Input() book:Book;
  // @ViewChild('hello') hello: ElementRef;
  // @ViewChild('nope') nope: ElementRef;
  constructor(private bs:BookInfoService) { }

  ngOnInit() {
    // this.iterateUp();
    this.x = 0;
    this.bookChoice = this.bs.returnBookInfo();
    console.log(this.bookChoice[0].title);
    // this.changedNum = 6;
    // this.bookChoice = 
    // [
    //   {
    //     title: "Hello to Paradise",
    //     author: 'Gavin Ross',
    //     yearPublished: 1987,
    //     is_Added: false
    //   },
    //   {
    //     title: "Goodbye Stagnation",
    //     author: "Rebecca Stein",
    //     yearPublished: 2003,
    //     is_Added: false
    //   }
    // ];
  }

  ngAfterViewInit() {
    // if(this.hello){
    //   this.hello.nativeElement.textContent = 'hello';
    // } else if (this.nope){
    //   this.nope.nativeElement.textContent = 'No Way';
    // }
  }

  iterateUp() {
    while(this.x <= 3){
      this.x++;
    }
    return this.x;
  }

  setClasses() {
    let classes = {
      main_div: true
    };
    return classes;
  }

  toggleDisplay(book:any) {
    console.log(book.target.previousElementSibling);
    let currentTarget = book.target.previousElementSibling;
    if(currentTarget.style.visibility === '' || currentTarget.style.visibility === 'visible'){
      currentTarget.style.visibility = 'hidden';
    } else if(currentTarget.style.visibility === 'hidden'){
      currentTarget.style.visibility = 'visible';
    }
  }
}