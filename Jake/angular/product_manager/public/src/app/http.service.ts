import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){};

  addProduct(product){
    return this._http.post('/products', product);
  };
  getProducts(){
    return this._http.get('/products');
  };
  deleteProduct(id){
    return this._http.delete(`/products/${id}`);
  };
  getOne(id){
    return this._http.get(`/products/${id}`);
  };
  editProduct(id, product){
    return this._http.put(`/products/${id}`, product);
  };


}