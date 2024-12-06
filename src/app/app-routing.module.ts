import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';

const routes: Routes = [
  { path:"" , redirectTo:"home", pathMatch:"full"},
  { path:"home" , component: HomeComponent},
  { path:"residence" , component: ResidenceComponent},
  { path:"residence/details/:id" , component: ResidenceDetailsComponent},  
  { path:"appartement", component: AppartementComponent},
  { path:"**" , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
