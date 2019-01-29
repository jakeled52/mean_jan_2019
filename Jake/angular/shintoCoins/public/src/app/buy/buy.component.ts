import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  bank = {};
  buyingAmount: number;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo(){
    this.bank = this._httpService.bankInfo();
  }
  buyCoins(){
    this._httpService.buyCoins(this.buyingAmount);
  }
}
