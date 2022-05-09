export class Triangle {
  side1: number;
  side2: number;
  side3: number;
  isEquilateral = false;
  isIsosceles = false;
  isScalene = false;
  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (
      this.side1 === 0 ||
      this.side2 === 0 ||
      this.side3 === 0 ||
      this.side1 + this.side2 <= this.side3 ||
      this.side2 + this.side3 <= this.side1 ||
      this.side3 + this.side1 <= this.side2
    ) {
      this.isEquilateral = false;
      this.isIsosceles = false;
      this.isScalene = false;
    } else if (
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    ) {
      this.isScalene = true;
    } else if (this.side1 === this.side2 && this.side1 === this.side3) {
      this.isEquilateral = true;
      this.isIsosceles = true;
    } else if (this.side1 === this.side2 && this.side1 !== this.side3) {
      this.isIsosceles = true;
    } else if (this.side2 === this.side3 && this.side2 !== this.side1) {
      this.isIsosceles = true;
    } else if (this.side3 === this.side1 && this.side3 !== this.side2) {
      this.isIsosceles = true;
    }
  }
}
