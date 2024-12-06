import { Component } from '@angular/core';
import { Residence } from '../core/Model/residence';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
residence: Residence = {
  id: 0,
  name: "ABCCCCCC",
  address: "bc",
  image: "",
  status: ""
}
residenceForm!: FormGroup
ngOnInit(){
  this.residenceForm= new FormGroup({
    name: new FormControl(this.residence.name),
    address: new FormControl(this.residence.address)
  })
}

}
