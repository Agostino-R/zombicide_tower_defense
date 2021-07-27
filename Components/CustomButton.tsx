import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: '15%',
    marginVertical: '5%',
  },
});

const CustomButton = props => {
  return (
    <View style={styles.buttonStyle}>
      <Button title={props.title} onPress={props.onPress} />
    </View>
  );
};

export default CustomButton;
