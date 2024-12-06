import { Component } from '@angular/core';
import { Residence } from '../core/Model/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  search=""
  hide=[true,true,true,true];
  showLocation(i: number){
    console.log(i);
    this.hide[i]=false
    if(this.listResidences[i].address == 'inconnu'){
      alert('adresse inconnu')
    }
  }
  listFavoris:Residence[]=[]
  addFavoris(i: number){
    let exist=false;
    for (let j = 0; j < this.listFavoris.length; j++) {
      if(this.listResidences[i] == this.listFavoris[j]){
        exist=true;
      }
    }
    if(!exist){
      this.listFavoris.push(this.listResidences[i])
    }
  }
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
}
