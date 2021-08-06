import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GameElementColorsEnum, PetsEnum } from '../GameData/Enums';

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  pickerText: {
    color: 'white',
  },
});

interface Props {
  setter: React.Dispatch<React.SetStateAction<GameElementColorsEnum>>;
}

const PetPicker = (props: Props) => {
  const [selectedType, setSelectedType] = useState<GameElementColorsEnum>(
    GameElementColorsEnum.GRAY,
  );
  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedType(itemValue);
          props.setter(itemValue);
        }}
        style={styles.pickerText}>
        <Picker.Item
          label={GameElementColorsEnum.LIGHT_BLUE}
          value={GameElementColorsEnum.LIGHT_BLUE}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.BLUE}
          value={GameElementColorsEnum.BLUE}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.VIOLET}
          value={GameElementColorsEnum.VIOLET}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.BROWN}
          value={GameElementColorsEnum.BROWN}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.RED}
          value={GameElementColorsEnum.RED}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.GREEN}
          value={GameElementColorsEnum.GREEN}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.PINK}
          value={GameElementColorsEnum.PINK}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.GRAY}
          value={GameElementColorsEnum.GRAY}
          style={styles.pickerText}
        />
        <Picker.Item
          label={GameElementColorsEnum.YELLOW}
          value={GameElementColorsEnum.YELLOW}
          style={styles.pickerText}
        />
      </Picker>
    </View>
  );
};

export default PetPicker;
