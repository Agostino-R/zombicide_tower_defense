import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WeaponsEnum } from '../GameData/Enums';

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
  setter: React.Dispatch<React.SetStateAction<WeaponsEnum>>;
}

const WeaponPicker = (props: Props) => {
  const [selectedType, setSelectedType] = useState<WeaponsEnum>(
    WeaponsEnum.BALISTE,
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
          label={WeaponsEnum.BALISTE}
          value={WeaponsEnum.BALISTE}
          style={styles.pickerText}
        />
        <Picker.Item
          label={WeaponsEnum.TREBUCHET}
          value={WeaponsEnum.TREBUCHET}
          style={styles.pickerText}
        />
      </Picker>
    </View>
  );
};

export default WeaponPicker;
