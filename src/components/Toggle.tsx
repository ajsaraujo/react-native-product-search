import React from "react";
import { Text, Switch, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  switchContainer: {
    marginRight: 7,
  },
  label: {
    color: "#565657",
  },
});

export default function Toggle() {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Switch></Switch>
      </View>
      <Text style={styles.label}>Only show products in stock</Text>
    </View>
  );
}
