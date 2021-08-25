import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { Feather } from "@expo/vector-icons";

// Screens
import Home from "./src/Home";
import Search from "./src/Search";

// Components
import SearchButton from "./src/components/SeachButton";
import CartButton from "./src/components/CartButton";
import BackButton from "./src/components/BackButton";

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
            headerLeft: () => <CartButton />,
            headerBackTitle: "Home",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          children={() => <Search />}
          name="Search"
          options={{
            headerRight: () => <SearchButton />,
            headerLeft: () => <BackButton />,
            headerBackTitle: "Search",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
