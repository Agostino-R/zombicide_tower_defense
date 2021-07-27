import React, { Dispatch, SetStateAction } from 'react';
import { Text, StyleSheet, View, Alert, FlatList } from 'react-native';

import ListItem from './ListItem';

import { GameElement } from '../GameData/Types';
import { StepTypeEnum } from '../GameData/Enums';

interface Props {
  title: string;
  onDeleteItem: (index: number) => void;
  elemList: GameElement[] | StepTypeEnum[];
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

const ParameterSection = (props: Props) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        data={props.elemList.map((x, index) => {
          return { key: index, title: x.name ? x.name : x };
        })}
        renderItem={({ item }) => (
          <ListItem
            index={item.key}
            text={item.title}
            onDelete={props.onDeleteItem}
          />
        )}
      />
    </View>
  );
};

export default ParameterSection;
