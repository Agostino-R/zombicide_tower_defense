import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import { SectionsEnum } from '../GameData/Enums';

interface Props {
  index: number;
  text: string;
  section: SectionsEnum;
  onDelete: (index: number, section: SectionsEnum) => void;
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

const ListItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <IconButton
        icon="close"
        color={Colors.red500}
        size={20}
        style={styles.icon}
        onPress={() => props.onDelete(props.index, props.section)}
      />
    </View>
  );
};

export default ListItem;
