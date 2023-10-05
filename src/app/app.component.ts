import { Component } from '@angular/core';
import { RomanNumber } from './roman-number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Famiglia';

  impero: RomanNumber[] = [
    new RomanNumber('I', 1),
    new RomanNumber('II', 2),
    new RomanNumber('III', 3),
    new RomanNumber('IV', 4),
    new RomanNumber('V', 5),
    new RomanNumber('VI', 6),
    new RomanNumber('VII', 7),
    new RomanNumber('VIII', 8),
    new RomanNumber('IX', 9),
    new RomanNumber('X', 10),
  ];
}
