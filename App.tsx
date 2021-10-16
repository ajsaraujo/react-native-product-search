import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 35,
  },
});
