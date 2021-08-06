import { Picker } from '@react-native-picker/picker';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GameElementColorsEnum } from '../../GameData/Enums';

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

const ColorPicker = (props: Props) => {
  const [selectedType, setSelectedType] = useState<GameElementColorsEnum>(
    GameElementColorsEnum.GRAY,
  );

  const pickerValues: any = useMemo(() => {
    let colorPickers = [];
    for (const [colorName, color] of Object.entries(GameElementColorsEnum)) {
      colorPickers.push(
        <Picker.Item
          key={color}
          label={colorName}
          value={color}
          style={{ color: color }}
        />,
      );
    }
    return colorPickers;
  }, [GameElementColorsEnum]);

  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedType(itemValue);
          props.setter(itemValue);
        }}
        style={styles.pickerText}>
        {pickerValues}
      </Picker>
    </View>
  );
};

export default ColorPicker;
