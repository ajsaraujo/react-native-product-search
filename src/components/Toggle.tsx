import React from "react";
import {
  Text,
  Switch,
  View,
  StyleSheet,
  SwitchChangeEvent,
} from "react-native";

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

export default function Toggle(props: {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Switch value={props.value} onValueChange={props.onChange}></Switch>
      </View>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
}
