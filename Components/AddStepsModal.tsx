import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomView from '../Components/CustomView';
import CenteredText from './CenteredText';
import CustomButton from './CustomButton';
import { StepTypeEnum } from '../GameData/Enums';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  steps: StepTypeEnum[];
  setSteps: React.Dispatch<React.SetStateAction<StepTypeEnum[]>>;
}

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  pickerText: {
    color: 'white',
  },
  numSteps: {
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
});

const AddStepsModal = (props: Props) => {
  const [numSteps, setNumText] = React.useState<number | undefined>(0);
  const [selectedStepType, setSelectedStepType] = useState<StepTypeEnum>(
    StepTypeEnum.SPAWN,
  );
  const [inputError, setInputError] = useState<boolean>(false);

  const checkTextValidity = text => {
    setNumText(text);
    const num = Number(text);
    if (num !== NaN) {
      if (num === parseInt(text)) {
        setInputError(false);
      } else {
        setInputError(true);
      }
    } else {
      setInputError(true);
    }
  };

  const onValidate = () => {
    props.setModalVisible(!props.modalVisible);
    let tmp = props.steps;
    for (let i = 0; i < numSteps; i++) {
      tmp.push(selectedStepType);
    }
    props.setSteps(tmp);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <CustomView>
        <CenteredText>Hello World!</CenteredText>
        <CenteredText>Nombre de tours de vagues à ajouter:</CenteredText>
        <TextInput
          style={styles.numSteps}
          onChangeText={text => checkTextValidity(text)}
          value={numSteps.toString()}
        />
        <CenteredText>Type de vague:</CenteredText>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedStepType}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedStepType(itemValue)
            }
            style={styles.pickerText}>
            <Picker.Item
              label={StepTypeEnum.SPAWN}
              value={StepTypeEnum.SPAWN}
              style={styles.pickerText}
            />
            <Picker.Item
              label={StepTypeEnum.REST}
              value={StepTypeEnum.REST}
              style={styles.pickerText}
            />
          </Picker>
        </View>
        <CustomButton
          title={`Valider`}
          disabled={inputError}
          onPress={() => onValidate()}
        />
      </CustomView>
    </Modal>
  );
};

export default AddStepsModal;
