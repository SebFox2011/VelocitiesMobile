import React from 'react';
import {StyleSheet, Text} from "react-native";

export default function SettingsScreen() {
  return <Text style={styles.container}>TEXT</Text>;
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34aaa2',
  }
});