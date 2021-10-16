import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryComponent from "./src/components/Category";
import Category from "./src/components/Category";
import SearchBar from "./src/components/SearchBar";
import Toggle from "./src/components/Toggle";
import Products from "./src/data/Products";
import parseData from "./src/utils/parseData";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <FlatList
          data={parseData(Products)}
          renderItem={({ item }) => CategoryComponent({ category: item })}
        ></FlatList>
      </View>

      <View>
        <View style={{ marginBottom: 10 }}>
          <SearchBar></SearchBar>
        </View>
        <Toggle></Toggle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 35,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  categoriesContainer: {
    marginTop: 20,
  },
});
