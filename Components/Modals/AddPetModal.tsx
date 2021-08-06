import React, { useContext, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { GameContext } from '../../GameConfig/GameContext';
import {
  GameElementColorsEnum,
  GameElementEnum,
  PetsEnum,
} from '../../GameData/Enums';
import CenteredText from '../CenteredText';
import CustomButton from '../CustomButton';
import CustomView from '../CustomView';
import ColorPicker from '../Pickers/ColorPicker';
import PetPicker from '../Pickers/PetPicker';
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

const AddPetModal = (props: Props) => {
  const [selectedPet, setSelectedPet] = useState<PetsEnum>(PetsEnum.NUCIFER);
  const [petColor, setPetColor] = useState<GameElementColorsEnum>(
    GameElementColorsEnum.GRAY,
  );
  const { status, setStatus } = useContext(GameContext);

  const onValidate = () => {
    props.setModalVisible(!props.modalVisible);
    status.pets.push({
      name: selectedPet,
      rechargeTime: retrieveGameObjectRecharge(GameElementEnum.PLAYER),
      color: petColor,
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
        <CenteredText>Choisir le familier à ajouter:</CenteredText>
        <PetPicker setter={setSelectedPet} />
        <CenteredText>Choisir la couleur associée à ce joueur</CenteredText>
        <ColorPicker setter={setPetColor} />
        <CustomButton title={`Valider`} onPress={() => onValidate()} />
      </CustomView>
    </Modal>
  );
};

export default AddPetModal;
