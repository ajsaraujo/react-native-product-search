import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  SwitchChangeEvent,
  Text,
  View,
} from "react-native";
import CategoryComponent from "./src/components/Category";
import SearchBar from "./src/components/SearchBar";
import Toggle from "./src/components/Toggle";
import Products from "./src/data/Products";
import parseData from "./src/utils/parseData";

const categories = parseData(Products);

export default function App() {
  const [filters, setFilters] = useState({
    onlyProductsInStock: false,
    searchString: "",
  });

  function toggleOnlyShowProductsInStock(onlyProductsInStock: boolean) {
    setFilters({ ...filters, onlyProductsInStock });
  }

  function search(searchString: string) {
    setFilters({ ...filters, searchString });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>📊 My Stock</Text>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            renderItem={({ item }) =>
              CategoryComponent({ category: item, filters })
            }
            extraData={filters}
          ></FlatList>
        </View>
      </View>

      <View>
        <View style={{ marginBottom: 10 }}>
          <SearchBar value={filters.searchString} onChange={search}></SearchBar>
        </View>
        <Toggle
          label="Only show products in stock"
          value={filters.onlyProductsInStock}
          onChange={toggleOnlyShowProductsInStock}
        ></Toggle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingBottom: 35,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
  },
  categoriesContainer: {
    marginTop: 20,
  },
});
