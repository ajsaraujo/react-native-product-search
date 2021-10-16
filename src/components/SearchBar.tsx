import React from "react";
import { TextInput } from "react-native";

export default function SearchBar(props: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChange}
      placeholder="Search products..."
      style={{
        borderWidth: 1,
        borderColor: "#e1e6ed",
        paddingVertical: 5,
        paddingHorizontal: 10,
      }}
    ></TextInput>
  );
}
