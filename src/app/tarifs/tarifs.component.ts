import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent {
  // Data source for the table
  tarifsData = [
    { service: 'Tarif/horaire', price: '78 euros/heure' },
    { service: 'Bilan neuropsychologique QI inclus (5 heures de consultation et 2 heures rédaction).', price: '585 euros' },
    { service: 'Test de QI', price: '370 euros' },
    { service: 'Séances de groupe (1 heure)', price: '39 euros' },
    { service: 'Séances individuelles (45 minutes)', price: '58 euros' }
  ];
  displayedColumns: string[] = ['service', 'price']; // Columns to display
}
