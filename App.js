import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";
import { Feather } from "@expo/vector-icons";

// Screens
import Home from "./src/Home";
import Search from "./src/Search";
import Cart from "./src/Cart";
import Favourite from "./src/Favourite";
import Product from "./src/Favourite";

// Components
import SearchButton from "./src/components/SeachButton";
import CartButton from "./src/components/CartButton";
import BackButton from "./src/components/BackButton";
import SearchInput from "./src/components/SearchInput";
import ClearCartButton from "./src/components/ClearCartButton";
import FavouriteButton from "./src/components/FavouriteButton";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => <Home />}
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
            headerRight: () => <SearchButton />,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
