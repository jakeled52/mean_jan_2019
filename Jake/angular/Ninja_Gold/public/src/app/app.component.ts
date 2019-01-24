import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  Gold = 0;
  farm: number;
  cave: number;
  house: number;
  casino: number;
  activities = [];
constructor(private _httpService: HttpService){

}

onFarmClick(){
  this.farm = (Math.floor(Math.random()*3)+2);
  this.Gold += this.farm;
  console.log(this.farm);
   this.activities.unshift(`you earned ${this.farm} gold from the farm.`);
  
}
onCaveClick(){
  this.cave = (Math.floor(Math.random()*5)+5);
  this.Gold += this.cave;
  console.log(this.cave);
  this.activities.unshift(`you earned ${this.cave} gold from the cave.`)
}
onHouseClick(){
  this.house = (Math.floor(Math.random()*8)+7);
  this.Gold += this.house;
  console.log(this.house);
  this.activities.unshift(`you earned ${this.house} gold from the house.`)
}
onCasinoClick(){
  this.casino = (Math.floor(Math.random()*200)-100);
  this.Gold += this.casino;
  console.log(this.casino);
  if (this.casino > 0)
    this.activities.unshift(`you earned ${this.casino} gold from the casino.`)
  else 
    this.activities.unshift(`you lost ${Math.abs(this.casino)} gold from the casino.`)
  }
}