import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product = {};
  errors: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
    this.getOne();
  }
  getOne(){
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      var observable = this._httpService.getOne(params['id']);
      observable.subscribe(data => {
        this.product = data['product'];
      });
    });
  };
  onSubmit(id){
    console.log(this.product)
    var observable = this._httpService.editProduct(id, this.product);
      observable.subscribe(data => {
        if(data['err']){
          if(data['err']['errors']){
            this.errors = [];
            var error = data['err']['errors'];
            console.log(error, "got these errors");
            for(var err in error){
              this.errors.push(error[err]);
            };
            console.log(this.errors, "this is the array of our errors")
          };
        }
        else{
          // this.errors = null;
          this._router.navigateByUrl('/products');
        }
      });
  };


}