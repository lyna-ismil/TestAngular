import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
id=0
constructor(private activatedRoute: ActivatedRoute){}
ngOnInit(){
  this.id= this.activatedRoute.snapshot.params['id']
}
}
