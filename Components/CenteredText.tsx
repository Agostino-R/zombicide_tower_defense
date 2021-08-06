import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

const CenteredText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default CenteredText;
