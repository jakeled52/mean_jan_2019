import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){};

  getWeather(city){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=6dde0bce6e37a7efc68e639ef5f6823a`);
  }

}
