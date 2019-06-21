import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbarright',
  templateUrl: './topbarright.component.html',
  styleUrls: ['./topbarright.component.scss']
})
export class TopbarrightComponent implements OnInit {
  @Input()
  selectedItem: string;
  @Output()
  selectedItemData = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit() {
  }
  showNavData(event: any) {
    console.log("event called",event.index)
    this.selectedItemData.emit(event);
  }
}
