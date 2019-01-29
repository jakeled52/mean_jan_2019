import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
  };

  showAllCakes() {
    return this._http.get('/cakes');
  }

  addCake(cake){
    return this._http.post('/cakes', cake);
  }

  showCake(id){
    return this._http.get(`/cakes/${id}`)
  }

  addReview(cake){
    return this._http.put(`/cakes/${cake._id}`, cake)
  }
}