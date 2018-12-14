import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet:any;
  errors:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {this.pet={name:'', type:'', desc:'', skills:{}}
    this.errors={name:'', type:'', desc:''}
    let observable = this._httpService.getter(this._route.params['value']['id'])
    observable.subscribe(data => {
    this.pet = data;
  })}
  update(){
    let observable = this._httpService.update(this.pet._id,this.pet)
    observable.subscribe(data => {
      if(data['errors']){
        this.errors = data['errors']
      }else if(data['name'] === 'MongoError'){
        this.errors.name = 'Name already exists'
      }else{
        this.goBack()
      }
  })}
  goBack() {
    this._router.navigate(['/pets/'+this.pet._id]);
  }
}
