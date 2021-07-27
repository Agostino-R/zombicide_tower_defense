import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { IconButton, Colors } from 'react-native-paper';

import { GameElement } from '../GameData/Types';
import { StepTypeEnum } from '../GameData/Enums';

interface Props {
  index: number;
  text: string;
  onDelete: (index: number) => void;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'powderblue',
  },
  icon: {
    marginVertical: '0%',
  },
});

const ListItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <IconButton
        icon="close"
        color={Colors.red500}
        size={20}
        style={styles.icon}
        onPress={() => props.onDelete(props.index)}
      />
    </View>
  );
};

export default ListItem;
