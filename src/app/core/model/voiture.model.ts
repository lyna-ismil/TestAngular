export class Voiture {
    constructor(
      public marque: string,
      public modele: string,
      public annee: number,
      public couleur: string,
      public image: string,  // URL de l'image
      public prix: number    // Prix de la voiture
    ) {}
  }