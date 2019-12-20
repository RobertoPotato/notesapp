import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import User from "./User";
import Add from "./Add";
import Home from "./Home";
import Finance from "./Finance";

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="home" size={20} color={tintColor} />
        )
      }
    },
    Add: {
      screen: Add,
      navigationOptions: {
        tabBarLabel: "Add",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="plus-square" size={20} color={tintColor} />
        )
      }
    },
    Finance: {
      screen: Finance,
      navigationOptions: {
        tabBarLabel: "News",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="inbox" size={20} color={tintColor} />
        )
      }
    },
    User: {
      screen: User,
      navigationOptions: {
        tabBarLabel: "User",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="user" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "tomato",
    inactiveColor: "gray",
    barStyle: { backgroundColor: "#111" },
    order: ["Home", "Add", "Finance", "User"]
  }
);
