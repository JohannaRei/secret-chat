// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Content = ({ children }: { children: any }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default Content;
