import React, { useContext, useState } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomView from '../Components/CustomView';
import ListItem from '../Components/ListItem';
import {
  GameElementColorsEnum,
  GameElementEnum,
  SectionsEnum,
  StepTypeEnum,
} from '../GameData/Enums';
import { GameElement } from '../GameData/Types';
import AddStepsModal from '../Components/AddStepsModal';
import CenteredText from '../Components/CenteredText';
import {
  useGameContext,
  GameStatus,
  initialStatus,
  GameContext,
} from '../GameConfig/GameContext';

const styles = StyleSheet.create({
  waveText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  sectionHeader: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

const ConfigurationPage = () => {
  const [waveNumber, setWaveNumber] = useState<number>(0);

  const [elementNatureToAdd, setElementNatureToAdd] = useState<
    GameElementEnum | undefined
  >(undefined);

  const [addStepsModalVisible, setAddStepsModalVisible] =
    useState<boolean>(false);

  const [addElementsModalVisible, setAddElementsModalVisible] =
    useState<boolean>(false);

  const { status, setStatus } = useGameContext();

  const onDeleteItem = (indexToDelete: number, section: SectionsEnum) => {
    if (section == SectionsEnum.WAVES) {
      status.steps.splice(indexToDelete, 1);
    } else if (section == SectionsEnum.PLAYERS) {
      status.players.splice(indexToDelete, 1);
    } else if (section == SectionsEnum.PETS) {
      status.pets.splice(indexToDelete, 1);
    } else if (section == SectionsEnum.WEAPONS) {
      status.weapons.splice(indexToDelete, 1);
    }
    setStatus({ ...status });
  };

  const onAddItem = (section: SectionsEnum) => {
    if (section == SectionsEnum.WAVES) {
      setAddStepsModalVisible(true);
    } else if (section == SectionsEnum.PLAYERS) {
      setElementNatureToAdd(GameElementEnum.PLAYER);
      setAddElementsModalVisible(true);
    } else if (section == SectionsEnum.PETS) {
      setElementNatureToAdd(GameElementEnum.PET);
      setAddElementsModalVisible(true);
    } else if (section == SectionsEnum.WEAPONS) {
      setElementNatureToAdd(GameElementEnum.WEAPON);
      setAddElementsModalVisible(true);
    }
  };

  return (
    <CustomView>
      <CenteredText>Vague numéro : {waveNumber}</CenteredText>
      <SectionList
        sections={[
          {
            title: SectionsEnum.WAVES,
            data: status.steps.map(x => x.toString()),
          },
          {
            title: SectionsEnum.PLAYERS,
            data: status.players.map(x => x.name),
          },
          {
            title: SectionsEnum.PETS,
            data: status.pets.map(x => x.name),
          },
          {
            title: SectionsEnum.WEAPONS,
            data: status.weapons.map(x => x.name),
          },
        ]}
        renderItem={({ item, index, section }) => (
          <ListItem
            index={index}
            text={item}
            section={section.title}
            onDelete={onDeleteItem}
          />
        )}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <CenteredText>{section.title}</CenteredText>
        )}
        renderSectionFooter={({ section }) => (
          <CustomButton
            title={`Ajouter ${section.title}`}
            onPress={() => onAddItem(section.title)}
          />
        )}
      />
      <AddStepsModal
        modalVisible={addStepsModalVisible}
        setModalVisible={setAddStepsModalVisible}
      />
    </CustomView>
  );
};

export default ConfigurationPage;
