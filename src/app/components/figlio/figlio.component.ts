import { Component, Input } from '@angular/core';
import { RomanNumber } from 'src/app/roman-number';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css'],
})
export class FiglioComponent {
  @Input() propFiglio!: RomanNumber[];
}
