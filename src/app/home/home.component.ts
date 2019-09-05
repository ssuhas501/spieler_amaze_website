import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stepperNumber = 0;
  showClassSubject = false;


  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  @ViewChild('nav', <any>{ read: DragScrollComponent }) ds: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  };

  moveRight() {
    this.ds.moveRight();
  };

}
