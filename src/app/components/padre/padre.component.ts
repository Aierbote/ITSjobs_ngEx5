import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RomanNumber } from 'src/app/roman-number';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  // I want to take the array from I to X
  @Input() propFiglioCopia!: RomanNumber[];
  // FORSE è colpevole del bug Padri Che Rovinano I Figli

  @Output() outputPadre = new EventEmitter<RomanNumber>();

  // version 1
  dispari: RomanNumber[] = this.propFiglioCopia.filter(
    (num) => num.digits % 2 != 0
  );

  // // version 2
  // dispari!: RomanNumber[];

  // constructor() {
  //   for (let num of this.propFiglioCopia) {
  //     if (num.digits % 2 != 0 ) {
  //       this.dispari.push(new RomanNumber(num.letters, num.digits));
  //     }
  //   }
  // }

  // // version 3
  // dispari: RomanNumber[] = [
  //   new RomanNumber('I', 1),
  //   new RomanNumber('III', 3),
  //   new RomanNumber('V', 5),
  //   new RomanNumber('VII', 7),
  //   new RomanNumber('IX', 9),
  // ];

  // for version 1, 2, 3
  sendDispari() {
    this.outputPadre.emit(this.dispari); // FUNZIONA!!! ho settato le proprietà di RomanNumber come opzionali `?:`
  }
}
