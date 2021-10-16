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
      <ProductName product={product} />
      <Text>{formatCurrency(product.price)}</Text>
    </View>
  );
}

function ProductName(props: { product: Product }) {
  const { product } = props;

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
    },
    productName: {
      marginRight: 5,
      lineHeight: 16,
    },
    outOfStockWarning: {
      fontSize: 12,
      lineHeight: 16,
      color: "#7d7d7d",
      fontWeight: "500",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      {!product.available && (
        <Text style={styles.outOfStockWarning}>OUT OF STOCK</Text>
      )}
    </View>
  );
}
