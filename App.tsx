import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  SwitchChangeEvent,
  Text,
  View,
} from "react-native";
import CategoryComponent from "./src/components/Category";
import Category from "./src/components/Category";
import SearchBar from "./src/components/SearchBar";
import Toggle from "./src/components/Toggle";
import Products from "./src/data/Products";
import parseData from "./src/utils/parseData";

export default function App() {
  const [onlyShowProductsInStock, setOnlyShowProductsInStock] = useState(false);

  function toggleOnlyShowProductsInStock(value: boolean) {
    setOnlyShowProductsInStock(value);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>📊 My Stock</Text>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={parseData(Products)}
            renderItem={({ item }) => CategoryComponent({ category: item })}
          ></FlatList>
        </View>
      </View>

      <View>
        <View style={{ marginBottom: 10 }}>
          <SearchBar></SearchBar>
        </View>
        <Toggle
          label="Only show products in stock"
          value={onlyShowProductsInStock}
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
