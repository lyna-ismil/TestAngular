import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Voiture } from './core/model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private apiUrl = 'http://localhost:3000/voitures'; // Adjust URL as necessary

  constructor(private http: HttpClient) {}

  // Get all cars
  getAllVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching voitures:', error);
        return of([]); // Return an empty array on error
      })
    );
  }

  // Add a new car
  addVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(this.apiUrl, voiture).pipe(
      catchError(error => {
        console.error('Error adding voiture:', error);
        throw error; // Rethrow the error to handle it in the component
      })
    );
  }

  // Update a car
  updateVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(`${this.apiUrl}/${voiture.marque}-${voiture.modele}`, voiture).pipe(
      catchError(error => {
        console.error('Error updating voiture:', error);
        throw error; // Rethrow the error to handle it in the component
      })
    );
  }

  // Delete a car based on its properties
  deleteVoiture(voiture: Voiture): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${voiture.marque}-${voiture.modele}`).pipe(
      catchError(error => {
        console.error('Error deleting voiture:', error);
        throw error; // Rethrow the error to handle it in the component
      })
    );
  }
}