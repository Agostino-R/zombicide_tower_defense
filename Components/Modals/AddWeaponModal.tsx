import React, { useContext, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { GameContext } from '../../GameConfig/GameContext';
import {
  GameElementColorsEnum,
  GameElementEnum,
  WeaponsEnum,
} from '../../GameData/Enums';
import CenteredText from '../CenteredText';
import CustomButton from '../CustomButton';
import CustomView from '../CustomView';
import ColorPicker from '../Pickers/ColorPicker';
import WeaponPicker from '../Pickers/WeaponPicker';
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

const AddWeaponModal = (props: Props) => {
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponsEnum>(
    WeaponsEnum.BALISTE,
  );
  const [weaponColor, setWeaponColor] = useState<GameElementColorsEnum>(
    GameElementColorsEnum.GRAY,
  );
  const { status, setStatus } = useContext(GameContext);

  const onValidate = () => {
    props.setModalVisible(!props.modalVisible);
    status.weapons.push({
      name: selectedWeapon,
      rechargeTime: retrieveGameObjectRecharge(GameElementEnum.PLAYER),
      color: weaponColor,
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
        <WeaponPicker setter={setSelectedWeapon} />
        <CenteredText>Choisir la couleur associée à ce joueur</CenteredText>
        <ColorPicker setter={setWeaponColor} />
        <CustomButton title={`Valider`} onPress={() => onValidate()} />
      </CustomView>
    </Modal>
  );
};

export default AddWeaponModal;
