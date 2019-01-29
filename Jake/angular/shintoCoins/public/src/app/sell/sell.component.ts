import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-buy',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  bank = {
    amountOfCoins: 0,
  };
  sellingAmount: any;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo(){
    this.bank = this._httpService.bankInfo();
  }

  sellCoins(){
    if(this.sellingAmount <= this.bank.amountOfCoins)
    this._httpService.sellCoins(this.sellingAmount);
  }

}
