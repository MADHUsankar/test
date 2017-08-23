import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
  providers:[WeatherService]
})
export class SeattleComponent implements OnInit {
dataExists:boolean = null;
city:string = null

humidity: any = ""
temp;
constructor(private weatherService: WeatherService){}
  

  ngOnInit() {
 
  this.weatherService.retieve_weather('Coach 36026-LINAV Nomad Hobo in Glovetanned Leather Handbag - Navy').then( obj =>{ console.log(obj);
      //   this.humidity=obj.main.humidity;
      //         this.temp = obj.main.temp;
      // this.temp = Math.floor(this.temp * (9/5) - 459.67); 
        // weather.main.humidity;
        // this.city = null;
    
    }).catch( err => {
       
      console.log(err); })
  }
  

}
