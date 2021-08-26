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

// Components
import SearchButton from "./src/components/SeachButton";
import CartButton from "./src/components/CartButton";
import BackButton from "./src/components/BackButton";
import SearchInput from "./src/components/SearchInput";
import ClearCartButton from "./src/components/ClearCartButton";

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
            // header: () => (
            //   <View style={tailwind("absolute top-32")}>
            //     <BackButton />
            //     <SearchInput />
            //   </View>
            // ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
