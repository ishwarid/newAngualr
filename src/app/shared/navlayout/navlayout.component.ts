import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navlayout',
  templateUrl: './navlayout.component.html',
  styleUrls: ['./navlayout.component.scss']
})
export class NavlayoutComponent implements OnInit {
  
  @Input()
  event: string;
  
  @Output()
  timefarmeData = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  showNavData(event: any) {
    console.log("event called",event.index)
    this.timefarmeData.emit(event);
    // if (event.index == 0){
    //     this.timefarmeData.emit('today');
    // }else if(event.index == 1){
    //   this.timefarmeData.emit('last_week');
    // }else if(event.index == 2){
    //   this.timefarmeData.emit('last_month');
    // }else if(event.index == 3){
    //   this.timefarmeData.emit('last_quarter');
    // }else if(event.index == 4){
    //   this.timefarmeData.emit('last_year');
    // }
  }


}
