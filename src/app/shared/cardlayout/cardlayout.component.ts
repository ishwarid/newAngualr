import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardlayout',
  templateUrl: './cardlayout.component.html',
  styleUrls: ['./cardlayout.component.scss']
})
export class CardlayoutComponent implements OnInit {

  @Input()
  sales_persons: any;
  constructor() { }

  ngOnInit() {
  }

}
