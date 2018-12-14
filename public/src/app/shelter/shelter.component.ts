import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {
  pets:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  this.allPets()
  }
  allPets(){
    let observable = this._httpService.getPets()
    observable.subscribe(data => {
    this.pets = data;
  })}
  view(id){
    this._router.navigate(['/pets/'+id]);
  }
  edit(id){
    this._router.navigate(['/pets/'+id+'/edit']);
}

}
