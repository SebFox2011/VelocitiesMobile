import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  //title: 'Links',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#34aaa2',
  },
});
