import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { View } from "react-native";
import tailwind from "tailwind-rn";

// Screens
import Home from "./src/Home/Home";
import Search from "./src/Search";
import Cart from "./src/Cart";
import Favourite from "./src/Favourite";
import Product from "./src/Product";

// Components
import SearchButton from "./src/components/buttons/SeachButton";
import CartButton from "./src/components/buttons/CartButton";
import BackButton from "./src/components/buttons/BackButton";
import SearchInput from "./src/components/SearchInput";
import ClearCartButton from "./src/components/buttons/ClearCartButton";
import FavouriteButton from "./src/components/buttons/FavouriteButton";

const Stack = createNativeStackNavigator();

const App = () => {
  // Favourites Array
  const favorites = [];

  // onPress events for Buttons
  const onProductPress = (object) => {
    console.log(object);
  };
  const onFavouriteButtonPress = (object, setFavourite) => {
    console.log(`${object.name} - Added into Favourites`);
    // favorites.d
    // favorites.push(object);
    // console.log(favorites);
  };
  const onCartButtonPress = (object) => {
    console.log(`${object.name} - Added into Cart`);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => (
            <Home
              onProductPress={onProductPress}
              onFavouriteButtonPress={onFavouriteButtonPress}
              onCartButtonPress={onCartButtonPress}
            />
          )}
          name="Home"
          options={{
            headerRight: () => <SearchButton />,
            headerLeft: () => (
              <View style={tailwind("flex-row")}>
                <CartButton />
                <FavouriteButton />
              </View>
            ),
            headerTitle: "Home",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          children={() => <Search />}
          name="Search"
          options={{
            headerLeft: () => <BackButton />,
            // headerRight: () => <SearchButton />,
            headerTitle: () => <SearchInput />,
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          children={() => <Cart />}
          name="Cart"
          options={{
            headerTitle: "Cart",
            headerTitleAlign: "center",
            headerLeft: () => <BackButton />,
            headerRight: () => <ClearCartButton />,
          }}
        />
        <Stack.Screen
          children={() => <Favourite />}
          name="Favourite"
          options={{
            headerTitle: "Favourite",
            headerTitleAlign: "center",
            headerLeft: () => <BackButton />,
            headerRight: () => <SearchButton />,
          }}
        />
        <Stack.Screen
          children={() => <Product />}
          name="Product" // Need to Change
          options={{
            headerRight: () => <SearchButton />,
            headerLeft: () => (
              <View style={tailwind("flex-row")}>
                <CartButton />
                <FavouriteButton />
              </View>
            ),
            headerTitle: "Product", // Need to Change
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
