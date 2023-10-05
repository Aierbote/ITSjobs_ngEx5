export class RomanNumber {
  letters: string; // this `?:` solve my `emit(this.dispary)` which didn't work
  digits: number; // this `?:` solve my `emit(this.dispary)` which didn't work

  constructor(letters_: string, digits_: number) {
    this.letters = letters_;
    this.digits = digits_;
  }

  toString() {
    return ' ' + this.letters;
  }
}
