import React from "react";
import { Category } from "../models/Category";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductComponent from "./Product";
import { Filters } from "../models/Filters";
import { Product } from "../models/Product";

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

export default function CategoryComponent(props: {
  category: Category;
  filters: Filters;
}) {
  const { category, filters } = props;

  function runInStockFilter(products: Product[]) {
    return filters.onlyProductsInStock
      ? products.filter((product) => product.available)
      : products;
  }

  function runSearchFilter(products: Product[]) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filters.searchString.toLowerCase())
    );
  }

  const filteredProducts = runSearchFilter(runInStockFilter(category.products));

  return (
    <View style={{ marginBottom: 25 }}>
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.header}>{category.name}</Text>
      </View>
      <Content products={filteredProducts}></Content>
    </View>
  );
}

function Content(props: { products: Product[] }) {
  const { products } = props;

  if (products.length > 0) {
    return (
      <FlatList
        data={products}
        renderItem={({ item }) => ProductComponent({ product: item })}
      ></FlatList>
    );
  }

  return <Text>No products found...</Text>;
}
