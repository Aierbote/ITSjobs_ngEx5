import { Component, Input, Output } from '@angular/core';
import { RomanNumber } from 'src/app/roman-number';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  // I want to take the array from I to X
  @Input() propFiglioCopia!: RomanNumber[];

  // filtering just the odd numbers
  @Output() outputFiglio: RomanNumber[] = this.propFiglioCopia.filter(
    (num) => num.digits % 2 == 1
  );
}
