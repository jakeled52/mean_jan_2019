import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
    this.allProducts();
    console.log(this.products, "got products")
  };

  allProducts(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log(data, "got products")
      this.products = data['product']
    });
  };
  onClick(id){
      let observable = this._httpService.deleteProduct(id);
        observable.subscribe(data => {
          console.log("Deleted this product", data);
        });
      this.allProducts();
  };

}