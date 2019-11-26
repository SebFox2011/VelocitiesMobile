import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function Account() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

Account.navigationOptions = {
  title: 'VeloCities',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#34aaa2',
  },
});
