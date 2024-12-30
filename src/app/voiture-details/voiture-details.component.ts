import { Component, Input } from '@angular/core';
import { Voiture } from '../core/model/voiture.model';

@Component({
  selector: 'app-voitureDetails',
  template: `
    <div *ngIf="voiture">
      <h2>Détails de la Voiture</h2>
      <p>Marque: {{ voiture.marque }}</p>
      <p>Modèle: {{ voiture.modele }}</p>
      <p>Année: {{ voiture.annee }}</p>
      <p>Couleur: {{ voiture.couleur }}</p>
      <p>Prix: {{ voiture.prix }} €</p>
      <img [src]="voiture.image" alt="{{ voiture.modele }}" />
    </div>
  `
})
export class VoitureDetailsComponent {
  @Input() voiture!: Voiture;
}