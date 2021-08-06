import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface Props {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: '15%',
    marginVertical: '5%',
  },
});

const CustomButton = (props: Props) => {
  return (
    <View style={styles.buttonStyle}>
      <Button
        title={props.title}
        disabled={props.disabled ? true : false}
        onPress={props.onPress}
      />
    </View>
  );
};

export default CustomButton;
