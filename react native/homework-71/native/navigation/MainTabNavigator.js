import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-pizza${focused ? "" : "-outline"}`
          : "md-pizza"
      }
    />
  )
};

HomeStack.path = "";

const OrdersStack = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  config
);

OrdersStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

OrdersStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  OrdersStack
});

tabNavigator.path = "";

export default tabNavigator;
