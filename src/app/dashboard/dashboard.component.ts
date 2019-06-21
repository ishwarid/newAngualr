import { Component, OnInit } from '@angular/core';
import { BackendApiServiceService } from './backend-api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
allData;
loading = {
  salesData: false
};
timeframe:string;
options = ["All"];


  funnel_data: any;
  tableHeader: any;
  revennu: number;
  wins: any;
  call_done: any;
  sales_persons: any;
  selectedItem: string;
  constructor(public backendService: BackendApiServiceService) { }

  ngOnInit() {
    this.timeframe = 'today'
    this.selectedItem = 'top'
    this.getDashbordData(this.timeframe, this.selectedItem)
    
  }

  setLoading(field: string) {
    this.loading[field] = true;
  }

  setLoadingComplete(field: string) {

    setTimeout(() => {
      // Start fading out and hide after delay
      this.loading[field] = false;

    }, 500);
  }
  getDashbordData(event, dropDown_value) {
    // start loading
    
    this.setLoading("salesData");
    
    // call backend services api to get data
    this.backendService
      .getData(event, dropDown_value)
      .subscribe(data => {
        // loading complete
        console.log("data", data)
        this.setLoadingComplete("salesData");

        // assign data to alldata     
        this.funnel_data = data.funnel;
        this.sales_persons = data.sales_rep;
        this.tableHeader = data.rawdata;
        this.call_done = data.noOfCalls;
        this.wins = data.noOfWon
        this.revennu =  Math.round((data.totalRevenue) / 10000);
        data.rawdata.forEach(e => {
        if (this.options.indexOf(e.verticle.S) === -1) {
          this.options.push(e.verticle.S);
        }

      });


      }
      );
  }

  showData(timeframe: string) {
    this.timeframe = timeframe;
    console.log("****************************", this.timeframe)
    this.getDashbordData(this.timeframe,'top');
      
  }
  selectedData(selectedItem: string) {
    this.selectedItem = selectedItem;
    if (selectedItem == 'top') {
     
      this.sales_persons.sort((a, b) => 0 - (a.rev > b.rev ? 1 : -1));
    } else {
      
      this.sales_persons.sort((a, b) => 0 - (a.rev > b.rev ? -1 : 1));
    }

   
  
      
  }
}
