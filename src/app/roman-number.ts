export class RomanNumber {
  letters!: string;
  digits!: number;

  constructor(letters_: string, digits_: number) {
    this.letters = letters_;
    this.digits = digits_;
  }

  toString() {
    return ' ' + this.letters;
  }
}
