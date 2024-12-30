import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoitureListeComponent } from './voiture-liste/voiture-liste.component';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { ModificationVoitureComponent } from './modification-voiture/modification-voiture.component';
@NgModule({
  declarations: [
    AppComponent,
    VoitureListeComponent,
    VoitureDetailsComponent,
    AjoutVoitureComponent,
    ModificationVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
