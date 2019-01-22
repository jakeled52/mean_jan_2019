import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  created_task: any;
  all_task: any;
  show_task: any;
  show_taskD: any;
  edited_task: any;
  deleted_task: any;
  title = 'Tasks';

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.createTask({title:"SkyDive", desc: "Jump out of an airplane"});
    this.allTasks();
    this.showTask("5c473aef3d318c3c28bc1d38");
    this.editTask("5c473aef3d318c3c28bc1d38",{title:"Eat",desc:"Food"});
    this.deleteTask("5c4734e65159b820a45518c1");
    this.lukeSkywalker();
  }
  createTask(params2){
    this._httpService.createTask(params2).subscribe((data: any) =>{
      this.created_task = data.data;
    });
  }
  allTasks(){
    this._httpService.allTasks().subscribe((data: any) => {
      this.all_task = data.data;
    })
  }
  showTask(tid){
    this._httpService.showTask(tid).subscribe((data:any) => {
        console.log(data.data[0]);
        this.show_task = data.data[0];
     })
  }
  editTask(tid,updates){
    this._httpService.editTask(tid, updates).subscribe((data:any) =>{
      console.log('edited task: ', data)
      this.edited_task = data;
    })
  }
  deleteTask(tid){
    this._httpService.deleteTask(tid).subscribe((data: any) => {
      this.deleted_task = data;
    })
  }
  lukeSkywalker(){
    this._httpService.lukeSkywalker().subscribe((data:any) =>{
        console.log("Name: ", data.name ," - height: ",data.height," - hair color: ",data.hair_color);
      this._httpService.xwing(data.homeworld).subscribe((xwing:any)=>{
        console.log("Lukes homeworld:", xwing.name);
      })
      this._httpService.xwing(data.starships[0]).subscribe
      ((xwing:any) => {
        console.log("Lukes first starship was a",xwing.name,".", xwing.pilots.length , "piolts in the movie flew one.")
        console.log("Xwing pilots:")
        for(var i = 0; i<xwing.pilots.length; i++){
          this._httpService.xwing(xwing.pilots[i]).subscribe((resident:any) => {
            console.log(resident.name)
          })
        }
      })
    })
    }
}
