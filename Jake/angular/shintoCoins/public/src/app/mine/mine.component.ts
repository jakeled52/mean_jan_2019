import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  var1 = 0;
  var2 = 0;
  answer = 0;
  public userAnswer = 0;
  constructor (
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    this.question();
  }
  question(){
    this.var1 = Math.round(((Math.random()*100)+1));
    this.var2 = Math.round(((Math.random()*100)+1));
    this.answer = this.var1 + this.var2;
  }
  mineCoins(){
    if (this.userAnswer == this.answer){
      console.log("Right!");
      this._httpService.mine_coin();
    }
    this.question();
  }
}
