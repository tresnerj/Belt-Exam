import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ShelterComponent } from './shelter/shelter.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelterComponent,
    NewPetComponent,
    ViewPetComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
