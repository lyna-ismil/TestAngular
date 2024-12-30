import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoitureService } from '../voiture.service'; // Adjust the path as necessary
import { Voiture } from '../core/model/voiture.model';

@Component({
  selector: 'app-modificationVoiture',
  template: `
    <h1>Modifier une Voiture</h1>
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
      <button type="submit" [disabled]="voitureForm.invalid">Modifier</button>
    </form>
  `
})
export class ModificationVoitureComponent implements OnInit {
  @Input() voiture!: Voiture; // Car to modify
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

  ngOnInit() {
    if (this.voiture) {
      this.voitureForm.patchValue(this.voiture); // Load existing car data
    }
  }

  onSubmit() {
    if (this.voitureForm.valid) {
      const updatedVoiture: Voiture = {
        ...this.voiture,
        ...this.voitureForm.value // Merge existing data with updated data
      };

      this.voitureService.updateVoiture(updatedVoiture).subscribe({
        next: (data) => {
          console.log('Voiture modifiée:', data);
          // Optionally reset the form or navigate to another component
          this.voitureForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de la modification de la voiture:', error);
        }
      });
    }
  }
}