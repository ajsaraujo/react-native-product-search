import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./src/components/SearchBar";
import Toggle from "./src/components/Toggle";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <SearchBar></SearchBar>
      </View>
      <Toggle></Toggle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 35,
  },
});
