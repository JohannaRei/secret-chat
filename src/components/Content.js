// @flow
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { StyleObj } from '@styleObj';

const screenHeight = Dimensions.get('window').height;

const Content = ({
  children,
  style,
  centered,
  header
}: {
  children: any,
  style: StyleObj,
  centered: boolean
}) => (
  <View style={[styles.container, style, centered && styles.centered, header && styles.header]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  centered: {
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 50,
    height: screenHeight - 50
  }
});

export default Content;
