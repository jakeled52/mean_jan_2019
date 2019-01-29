import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() cityToShow: any;
  city: String;
  data = {};
  img_urls = {
    'Seattle': "https://upload.wikimedia.org/wikipedia/commons/e/e3/Seattle_Kerry_Park_Skyline.jpg",
    'San Jose': "https://www.britishairways.com/assets/images/destinations/components/pathfinderInspirationalImageIndex/san-jose/1200x675-628101920.jpg",
    'Burbank': "https://photos.travelblog.org/Photos/44580/213247/f/1618589-is-that-Burbank-skyline-0.jpg",
    'Dallas': "https://www.100resilientcities.org/wp-content/uploads/2017/06/Dallas-hero-crop.jpg",
    'Washington DC.': "https://as2.ftcdn.net/jpg/00/74/55/77/500_F_74557732_LUre9UtclmxaRQ95o4qoKO8iq8vNUVlf.jpg",
    'Chicago':"https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?cs=srgb&dl=architecture-blue-sky-buildings-1058759.jpg&fm=jpg"
  };
  url: String;
   
  constructor(
    public _httpService: HttpService,
    public _route: ActivatedRoute,
    public _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.city = params['city'];
      console.log(params['city']);
      this.getWeather(params);
    });
  };
  getWeather(city){
    let observable = this._httpService.getWeather(this.city);
    observable.subscribe(data => {
      console.log("Show our city weather", data);
      this.url = this.img_urls[`${data['name']}`];
      this.data = data;
    })
  }

}