import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/Model/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
id=0
error=""
path:any
listResidences:Residence[]=[
  {id:1,"name": "El fel","address":"Borj Cedria",
  "image":"../../assets/images/R1.jpeg", status: "Disponible"},
  {id:2,"name": "El yasmine",
  "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
  "Disponible" },
  {id:3,"name": "El Arij",
  "address":"Ezzahra","image":"../../assets/images/R3.jpg", status:
  "Vendu"},
  {id:4,"name": "El Anber","address":"inconnu",
  "image":"../../assets/images/R4.jpg", status: "En Construction"}
  ];
  residence!:Residence
constructor(private activatedRoute: ActivatedRoute){}
ngOnInit(){
  this.id= this.activatedRoute.snapshot.params['id']
  // get residence if it exists
  if(this.id==0){
    this.error="Residence not found"
  }
  this.residence= this.listResidences[1]
  console.log(this.residence);
  
  console.log(this.activatedRoute.snapshot.routeConfig?.path);
  this.path= this.activatedRoute.snapshot.routeConfig?.path
  this.bonjour()
}

bonjour(){
  console.log("Bonjour");
}
}
