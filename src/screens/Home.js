import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ajax from "../../api/FetchNotes";
import NoteComponent from "../components/NoteComponent"

export default class Home extends Component {
  state = { notes: [] };

  async componentDidMount() {
    const notes = await ajax.fetchnotes();
    this.setState({ notes });

  }

  render() {
    return (
      <View>
        {
          <NoteComponent notes={this.state.notes} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({});

//0712829006 bro