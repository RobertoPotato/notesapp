import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import propTypes from "prop-types";

export default class NoteComponent extends Component {
  static propTypes = {
    notes: propTypes.array.isRequired
  };

  render() {
    console.log(this.props.notes);
    return (
      <View>
        <FlatList
          data={this.props.notes}
    renderItem={({ item }) => <Text  style={styles.noteList}>{item.title}: says {item.body}</Text>}
          keyExtractor={item => `Item#${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteList: {
    margin: 4,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    padding: 4
  }
});
