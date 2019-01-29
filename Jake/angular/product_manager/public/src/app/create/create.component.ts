import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = {};
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
  };
  onSubmit(){
    let observable = this._httpService.addProduct(this.product);
    observable.subscribe(data => {
      console.log("Added an product", data);
      this.product = {title: "", price: "", img: ""};
      if(data['err']){
        if(data['err']['errors']){
          this.errors = [];
          let error = data['err']['errors'];
          console.log(error, "got these errors");
          for(let e in error){
            this.errors.push(error[e]);
          };
          console.log(this.errors, "this is the array of our errors")
        };
      }
      else{
        // this.errors = null;
        this._router.navigateByUrl('/products');
      }
    });
  }

}