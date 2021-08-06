import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, TextInput, View } from 'react-native';
import CustomView from '../CustomView';
import { GameContext } from '../../GameConfig/GameContext';
import {
  GameElementColorsEnum,
  GameElementEnum,
  StepTypeEnum,
} from '../../GameData/Enums';
import CenteredText from '../CenteredText';
import ColorPicker from '../Pickers/ColorPicker';
import CustomButton from '../CustomButton';
import { retrieveGameObjectRecharge } from '../utils';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
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

const AddPlayerModal = (props: Props) => {
  const [playerName, setPlayerName] = useState<string>('');
  const [playerColor, setPlayerColor] = useState<GameElementColorsEnum>(
    GameElementColorsEnum.GRAY,
  );
  const { status, setStatus } = useContext(GameContext);

  const onValidate = () => {
    props.setModalVisible(!props.modalVisible);
    status.players.push({
      name: playerName,
      rechargeTime: retrieveGameObjectRecharge(GameElementEnum.PLAYER),
      color: playerColor,
    });
    setStatus({ ...status });
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
        <CenteredText>Entrer le nom du joueur:</CenteredText>
        <TextInput
          style={styles.numSteps}
          onChangeText={text => {
            if (text != '') {
              setPlayerName(text);
            }
          }}
          value={playerName}
        />
        <CenteredText>Choisir la couleur associée à ce joueur</CenteredText>
        <ColorPicker setter={setPlayerColor} />
        <CustomButton title={`Valider`} onPress={() => onValidate()} />
      </CustomView>
    </Modal>
  );
};

export default AddPlayerModal;
