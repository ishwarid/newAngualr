import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablelayout',
  templateUrl: './tablelayout.component.html',
  styleUrls: ['./tablelayout.component.scss']
})
export class TablelayoutComponent implements OnInit {
@Input()
tableHeader : any;
  constructor() { }

  ngOnInit() {
  }
  colorSet(item) {
    //  change the color of row in deatils table as per conditions

    if (item === 'Won') {
      return "#e6f5e6"
    } else if (item === 'Lost') {
      return "#fff2f2"
    } else {
      return "#f8f9fb"
    }
  }

}
