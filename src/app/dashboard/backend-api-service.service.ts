import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendApiServiceService {

  
  constructor(private httpClient: HttpClient) { }

    
  getData(interval: string, salesFilter: string): any {
    console.log("calling", interval, salesFilter)
    // +"&forverticle="+salesFilter
    if(salesFilter !== 'All'){
     let  data =  this.httpClient.get("https://nzhd55ek4c.execute-api.ap-south-1.amazonaws.com/prod/?timeframe=" + interval );
     console.log("in")
      return data;
    }else{    
      let data =  this.httpClient.get("https://nzhd55ek4c.execute-api.ap-south-1.amazonaws.com/prod/?timeframe=" + interval);
      return data;
    }

    
  }
}
