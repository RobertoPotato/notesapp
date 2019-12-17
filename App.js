import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import User from "./src/screens/User"
import Index from "./src/screens/Index"

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Index,
    User: User
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Cure"
    }
  }
);

export default createAppContainer(AppNavigator);