import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get('api/allpets')
  }
  getter(id){
    console.log(id)
    return this._http.get('api/pet/'+id)
  }
  postPet(pet){
    return this._http.post('api/pet/new', pet)
  }
  update(id, pet){
    return this._http.put('api/pet/'+id, pet)
  }
  delete(id){
    return this._http.delete('api/pet/'+id)
  }
}