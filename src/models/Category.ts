import { Product } from "./Product";

export class Category {
  constructor(public readonly name: string, public products: Product[]) {}

  clone() {
    return new Category(this.name, [...this.products]);
  }

  removeOutOfStockProducts() {
    this.products = this.products.filter((product) => product.available);
  }
}
