import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureListeComponent } from './voiture-liste/voiture-liste.component'; // Adjust the path if necessary
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component'; // Adjust the path if necessary
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component'; // Adjust the path if necessary
import { ModificationVoitureComponent } from './modification-voiture/modification-voiture.component'; // Adjust the path if necessary

const routes: Routes = [
  {  path: '', redirectTo: '/voitures', pathMatch: 'full' }, // Redirect to voiture list by default
  { path: 'voitures', component: VoitureListeComponent },
  { path: 'voiture/:id', component: VoitureDetailsComponent }, // Assuming you're using ID to fetch details
  { path: 'ajout', component: AjoutVoitureComponent },
  { path: 'modification/:id', component: ModificationVoitureComponent } // Assuming you're using ID for modification
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
