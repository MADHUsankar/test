import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  providers:[WeatherService]
})
export class ChicagoComponent implements OnInit {
    dataExists:boolean = null;
    city:string = null
    humidity;
    temp;
  constructor(private weatherService: WeatherService){}

  ngOnInit() {

  this.weatherService.retieve_weather('Pens').then( obj =>{ console.log(obj);
      //   this.humidity=obj.main.humidity;
      //         this.temp = obj.main.temp;
      // this.temp = Math.floor(this.temp * (9/5) - 459.67); 
        // weather.main.humidity;
        // this.city = null;
    
    }).catch( err => {
       
      console.log(err); })
  }
  

}
