import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class WeatherService {

   constructor(private http: Http) { }

  retieve_weather(city ){
    return this.http.get('http://api.walmartlabs.com/v1/search?apiKey=st4yc9x9nza7wgfpxz6gctju&query='+city+'&numItems=1').map(data=>data.json()).toPromise()
    //  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a0d381a5f70d1eef74619b765492161e').map(data=>data.json()).toPromise()

  }

}
