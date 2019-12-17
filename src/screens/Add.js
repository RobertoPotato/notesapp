import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Add extends Component {
  render() {
    return (
      <View>
        <Text>Create New Item</Text>
        <Button
          title="Press me"
          onPress={() => this.props.navigation.navigate("User")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
