import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";

const FavouriteButton = () => {
  const [favPressed, setFavPressed] = useState(false);
  const navigation = useNavigation();
  const onFavouritePress = () => {
    setFavPressed(true);
    setFavPressed(false);
    navigation.navigate("Favourite");
  };
  return (
    <TouchableOpacity style={tailwind("ml-3")} onPress={onFavouritePress}>
      <MaterialIcons
        name={favPressed ? "favorite" : "favorite-outline"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
