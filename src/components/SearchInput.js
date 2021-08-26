import React from "react";
import { useState } from "react";
import { View, TextInput } from "react-native";
import tailwind from "tailwind-rn";

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View>
      <TextInput
        style={tailwind("w-72 h-9 px-3 rounded-full bg-gray-200")}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        placeholder="Search here"
      />
    </View>
  );
};

export default SearchInput;
