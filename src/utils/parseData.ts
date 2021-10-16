import { Category } from "../models/Category";
import { Product } from "../models/Product";
import parseFloat from "./parseFloat";

export default (
  data: { category: string; price: string; stocked: boolean; name: string }[]
): Category[] => {
  const categoryToProducts = new Map<string, Product[]>();

  for (const product of data) {
    if (!categoryToProducts.has(product.category)) {
      categoryToProducts.set(product.category, []);
    }

    const parsedProduct = new Product(
      product.name,
      parseFloat(product.price),
      product.stocked
    );

    const productList = categoryToProducts.get(product.category) as Product[];

    categoryToProducts.set(product.category, [...productList, parsedProduct]);
  }

  return Array.from(categoryToProducts.entries()).map(
    ([name, products]) => new Category(name, products)
  );
};
