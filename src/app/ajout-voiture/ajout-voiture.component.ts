import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoitureService } from '../voiture.service'; // Adjust the path as necessary
import { Voiture } from '../core/model/voiture.model';

@Component({
  selector: 'app-ajoutVoiture',
  template: `
    <h1>Ajouter une Voiture</h1>
    <form [formGroup]="voitureForm" (ngSubmit)="onSubmit()">
      <label>Marque:</label>
      <input formControlName="marque" />
      <label>Modèle:</label>
      <input formControlName="modele" />
      <label>Année:</label>
      <input type="number" formControlName="annee" />
      <label>Couleur:</label>
      <input formControlName="couleur" />
      <label>Image URL:</label>
      <input formControlName="image" />
      <label>Prix:</label>
      <input type="number" formControlName="prix" />
      <button type="submit" [disabled]="voitureForm.invalid">Ajouter</button>
    </form>
  `
})
export class AjoutVoitureComponent {
  voitureForm: FormGroup;

  constructor(private fb: FormBuilder, private voitureService: VoitureService) {
    this.voitureForm = this.fb.group({
      marque: ['', Validators.required],
      modele: ['', Validators.required],
      annee: [null, Validators.required],
      couleur: ['', Validators.required],
      image: ['', Validators.required],
      prix: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.voitureForm.valid) {
      const newVoiture: Voiture = {
        marque: this.voitureForm.value.marque,
        modele: this.voitureForm.value.modele,
        annee: this.voitureForm.value.annee,
        couleur: this.voitureForm.value.couleur,
        image: this.voitureForm.value.image,
        prix: this.voitureForm.value.prix
      };

      this.voitureService.addVoiture(newVoiture).subscribe({
        next: (data) => {
          console.log('Nouvelle voiture ajoutée:', data);
          // Optionally reset the form or navigate to another component
          this.voitureForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la voiture:', error);
        }
      });
    }
  }
}