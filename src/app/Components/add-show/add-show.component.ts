import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  @Input() showSearch:any
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const searchInput = {
      showName: this.showSearch
    };
    console.log(searchInput.showName);
  }
}
