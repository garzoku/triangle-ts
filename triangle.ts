export class Triangle {
  side1: number;
  side2: number;
  side3: number;
  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  private get isEquilateral() {
    if (this.isTriangleInvalid()) {
      return false;
    } else if (this.side1 === this.side2 && this.side1 === this.side3) {
      return true;
    } else {
      return false;
    }
  }
  private get isIsosceles() {
    if (this.isTriangleInvalid()) {
      return false;
    } else if (
      (this.side1 === this.side2 && this.side1 === this.side3) ||
      (this.side1 === this.side2 && this.side1 !== this.side3) ||
      (this.side2 === this.side3 && this.side2 !== this.side1) ||
      (this.side3 === this.side1 && this.side3 !== this.side2)
    ) {
      return true;
    } else {
      return false;
    }
  }
  private get isScalene() {
    if (this.isTriangleInvalid()) {
      return false;
    } else if (
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    ) {
      return true;
    } else {
      return false;
    }
  }
  isTriangleInvalid() {
    if (
      this.side1 === 0 ||
      this.side2 === 0 ||
      this.side3 === 0 ||
      this.side1 + this.side2 <= this.side3 ||
      this.side2 + this.side3 <= this.side1 ||
      this.side3 + this.side1 <= this.side2
    ) {
      return true;
    } else {
      return false;
    }
  }
}
