import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#272727',
    height: '100%',
  },
});

const CustomView = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

export default CustomView;
