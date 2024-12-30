import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title: string = 'Voiture Management';
voitures: { name: string; image: string }[] = [
{ name: 'Toyota', image: 'https://image.made-in-china.com/155f0j00YjAqomJriKck/2022-2023-New-Car-Camry-Tayota-Trade-Camry-2-5q-Hybrid-Sedan-Car-2023-Auto-Car-for-Sale.webp' },
{ name: 'Honda', image: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2024/07/Civic-Sedan-Lineup-2407.webp' },
{ name: 'Ford', image: 'https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=450231%2Ffront34%2Flg' },
]; // Example list of cars with images

// Method to add a new voiture
addVoiture(name: string, image: string): void {
if (name && image) {
this.voitures.push({ name, image });
}
}
deleteVoiture(index: number): void {
this.voitures.splice(index, 1);
}

// Method to get the total number of voitures
getTotalVoitures(): number {
return this.voitures.length;
}
}