import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funnellayout',
  templateUrl: './funnellayout.component.html',
  styleUrls: ['./funnellayout.component.scss']
})
export class FunnellayoutComponent implements OnInit {
@Input()
funnel_data: any;

@Input()
event: any;
@Input()
call_done:Number;
@Input()
wins:Number;
@Input()
revennu:Number;

total_call: Number;
  total_wins: Number;
  total_revenu: Number;
  constructor() { }

  ngOnInit() {
    if (this.event == 'today') {
      this.total_call = 20;
      this.total_wins = 5;
      this.total_revenu = 100;
     
      
    } else if (this.event == 'last_week') {
      this.total_call = 75;
      this.total_wins = 10;
      this.total_revenu = 150;
     
    }
    else if (this.event == 'last_month') {
      this.total_call = 205;
      this.total_wins = 15;
      this.total_revenu = 250;
      
    }
    else if (this.event == 'last_quarter') {
      this.total_call = 350;
      this.total_wins = 25;
      this.total_revenu = 400;
     
    }
    else if (this.event == 'last_year') {
      this.total_call = 500;
      this.total_wins = 30;
      this.total_revenu = 500;
     
    }
    
  }

}
