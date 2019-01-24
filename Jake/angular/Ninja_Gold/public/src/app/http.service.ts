import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  TotalGold: Number;
  constructor(private _http: HttpClient) { }
}
