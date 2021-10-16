import React from "react";
import { Category } from "../models/Category";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductComponent from "./Product";

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

export default function CategoryComponent(props: { category: Category }) {
  const { category } = props;

  return (
    <View style={{ marginBottom: 25 }}>
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.header}>{category.name}</Text>
      </View>
      <FlatList
        data={category.products}
        renderItem={({ item }) => ProductComponent({ product: item })}
      ></FlatList>
    </View>
  );
}
