import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Image } from '../carousel/carousel.component';
import * as SnapScroll from '../../../node_modules/angular-snapscroll/dist/angular-snapscroll.min';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})

export class BlogComponent implements OnInit {
  mainText1 = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.mainText1 = true;
    }, 1000)

  }

}
