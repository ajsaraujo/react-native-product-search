import { Product } from "./Product";

export class Category {
  constructor(
    public readonly name: string,
    public readonly products: Product[]
  ) {}
}
