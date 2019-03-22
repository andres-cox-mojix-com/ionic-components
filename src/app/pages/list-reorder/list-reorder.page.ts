import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  people = ['Aquaman','Batman','Flash','Wonder Woman']

  constructor() { }

  ngOnInit() {
  }
  reorder(event){
    // console.log(event);
    const moveItem = this.people.splice( event.detail.from, 1)[0];
    this.people.splice( event.detail.to, 0, moveItem);
    event.detail.complete();
  }
  onClick(){
    console.log(this.people);
  }
}
