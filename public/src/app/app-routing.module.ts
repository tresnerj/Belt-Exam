import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPetComponent } from './edit-pet/edit-pet.component'
import { NewPetComponent } from './new-pet/new-pet.component'
import { ViewPetComponent } from './view-pet/view-pet.component'
import { ShelterComponent } from './shelter/shelter.component'

const routes: Routes = [
  {path: 'pets/new', component: NewPetComponent},
  {path: 'pets/:id', component: ViewPetComponent},
  {path: 'pets/:id/edit', component: EditPetComponent},
  {path: 'pets', component: ShelterComponent},
  { path: '', pathMatch: 'full', redirectTo: '/pets' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
