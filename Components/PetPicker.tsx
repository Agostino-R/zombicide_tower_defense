import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PetsEnum } from '../GameData/Enums';

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
  setter: React.Dispatch<React.SetStateAction<PetsEnum>>;
}

const PetPicker = (props: Props) => {
  const [selectedType, setSelectedType] = useState<PetsEnum>(PetsEnum.NUCIFER);
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
          label={PetsEnum.NUCIFER}
          value={PetsEnum.NUCIFER}
          style={styles.pickerText}
        />
        <Picker.Item
          label={PetsEnum.VATAN}
          value={PetsEnum.VATAN}
          style={styles.pickerText}
        />
        <Picker.Item
          label={PetsEnum.MAGOG}
          value={PetsEnum.MAGOG}
          style={styles.pickerText}
        />
        <Picker.Item
          label={PetsEnum.GOG}
          value={PetsEnum.GOG}
          style={styles.pickerText}
        />
        <Picker.Item
          label={PetsEnum.VANADIS}
          value={PetsEnum.VANADIS}
          style={styles.pickerText}
        />
        <Picker.Item
          label={PetsEnum.SETH}
          value={PetsEnum.SETH}
          style={styles.pickerText}
        />
      </Picker>
    </View>
  );
};

export default PetPicker;
