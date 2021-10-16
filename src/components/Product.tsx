import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Product } from "../models/Product";
import formatCurrency from "../utils/formatCurrency";

export default function ProductComponent(props: { product: Product }) {
  const { product } = props;

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
      borderBottomColor: "#e3e3e3",
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
  });
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text>{formatCurrency(product.price)}</Text>
    </View>
  );
}
