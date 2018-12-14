import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  errors:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit() {
    this.errors = {name:'', type:'', desc:''}
  }
  create(pet){
    let observable = this._httpService.postPet(pet)
    observable.subscribe(data => {
      if(data['errors']){
        this.errors = data['errors']
      }else if(data['name'] === 'MongoError'){
        this.errors.name = 'Name already exists'
      }else{
        this.goHome()
      }
  })}
  goHome(){
    this._router.navigate(['/pets']);
  }

}