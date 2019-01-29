import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  bank = {
    amountOfCoins: 0,
    valueOfCoins: 1
  };
  book = [];
  constructor(private _http: HttpClient) { };
  transactions(){
    return this.book;
  }
  bankInfo(){
    return this.bank;
  }
  buyCoins(numberOfCoins){
    this.bank.valueOfCoins += numberOfCoins;
    this.bank.amountOfCoins += numberOfCoins;
    this.book.push(
      {
        action: 'bought',
        amount: numberOfCoins,
        value: this.bank.valueOfCoins
      }
    )
  }
  sellCoins(numberOfCoins){
    this.bank.valueOfCoins -= numberOfCoins;
    this.bank.amountOfCoins -= numberOfCoins;
    this.book.push(
      {
        action: 'sold',
        amount: numberOfCoins,
        value: this.bank.valueOfCoins
      }
    )
  }
  mine_coin(){
    this.bank.valueOfCoins += 1;
    this.bank.amountOfCoins += 1;
    this.book.push(
      {
        action: 'mined',
        amount: 1,
        value: this.bank.valueOfCoins
      }
    )
  }
}
