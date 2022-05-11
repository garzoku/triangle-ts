export class Triangle {
  side1: number;
  side2: number;
  side3: number;
  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get isValidTriangle() {
    return (
      this.side1 > 0 &&
      this.side2 > 0 &&
      this.side3 > 0 &&
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side3 + this.side1 > this.side2
    );
  }
  private get isEquilateral() {
    return (
      this.isValidTriangle &&
      this.side1 === this.side2 &&
      this.side1 === this.side3
    );
  }
  private get isIsosceles() {
    return (
      (this.isValidTriangle &&
        this.side1 === this.side2 &&
        this.side1 === this.side3) ||
      (this.isValidTriangle &&
        this.side1 === this.side2 &&
        this.side1 !== this.side3) ||
      (this.isValidTriangle &&
        this.side2 === this.side3 &&
        this.side2 !== this.side1) ||
      (this.isValidTriangle &&
        this.side3 === this.side1 &&
        this.side3 !== this.side2)
    );
  }
  private get isScalene() {
    return (
      this.isValidTriangle &&
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    );
  }
}
