import React from "react";
import { Category } from "../models/Category";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

export default function CategoryComponent(props: { category: Category }) {
  const { category } = props;

  return (
    <View>
      <Text style={styles.header}>{category.name}</Text>
    </View>
  );
}
