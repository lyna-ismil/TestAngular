import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'firstproject';
  nb1= 5
  nb2=8

  getNB(): number {
    var a=45;
    //console.log(this.nb1)
    let list = [4, 5, 6];

  for (let i in list) {​

    console.log("indice : "+i);
    console.log("valeur : "+list[i]);
  }





    return a;
  }

  /*
  function name(params:type) {
    
  }

  const name = (params:type) => {
    
  }*/
   
  //x= a+ this.nb1
}
