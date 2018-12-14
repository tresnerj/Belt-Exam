import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {
  pet:any;
  clicked:any;
  likes:number;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.pet = {name:'', type:'', desc:'', skills:{}, likes:0}
    this.clicked = false;
    let observable = this._httpService.getter(this._route.params['value']['id'])
    observable.subscribe(data => {
    this.pet = data;
  })}

  like(){
    this.pet.likes += 1;
    this.clicked = true;
    let observable = this._httpService.update(this.pet._id, this.pet)
    observable.subscribe(data =>{
      console.log(this.pet.likes)
    })}

  adopt(id){
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
    this.goHome()
  })}

  goHome(){
    this._router.navigate(['/pets']);
  }

}
