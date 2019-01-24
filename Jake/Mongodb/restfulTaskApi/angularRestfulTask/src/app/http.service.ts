import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  allTasks(){
    return this._http.get('/tasks');
  }
  createTask(params){
    console.log("service")
  	return this._http.post('/new',params);
  }
  showTask(tid){
    return this._http.get('/task/'+tid);
  }
  editTask(tid, updates){
    return this._http.put('/edit/'+tid,updates);
  }
  deleteTask(tid){
    return this._http.delete('/destroy/'+tid);
  }
  lukeSkywalker(){
    return this._http.get("https://swapi.co/api/people/1/");
  }
  xwing(url){
    return this._http.get(url);
  }
  getTask_id(id){
    return this._http.get(`/tasks/${id}`);
  }
}
