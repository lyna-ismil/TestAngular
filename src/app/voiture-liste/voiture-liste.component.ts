import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service'; // Adjust the path as necessary
import { Voiture } from '../core/model/voiture.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voitureListe',
  template: `
    <h1>Liste des Voitures</h1>
    <ul>
      <li *ngFor="let voiture of voitures; let i = index">
        {{ voiture.marque }} {{ voiture.modele }} - {{ voiture.prix }} €
        <button (click)="selectVoiture(voiture)">Détails</button>
        <button (click)="deleteVoiture(voiture, i)">Supprimer</button>
      </li>
    </ul>
  `
})
export class VoitureListeComponent implements OnInit {
  voitures: Voiture[] = [];

  constructor(private voitureService: VoitureService, private router: Router) {}

  ngOnInit() {
    this.loadVoitures();
  }

  loadVoitures() {
    this.voitureService.getAllVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  selectVoiture(voiture: Voiture) {
    // Navigate to a details component with the selected voiture
    this.router.navigate(['/voiture-details', voiture.marque, voiture.modele]);
  }

  deleteVoiture(voiture: Voiture, index: number) {
    this.voitureService.deleteVoiture(voiture).subscribe({
      next: () => {
        this.voitures.splice(index, 1); // Remove from local array
        console.log('Voiture deleted:', voiture);
      },
      error: (error) => {
        console.error('Error deleting voiture:', error);
      }
    });
  }
}