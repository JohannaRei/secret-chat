// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: any
};

const Header = ({ children }: Props) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});

export default Header;
