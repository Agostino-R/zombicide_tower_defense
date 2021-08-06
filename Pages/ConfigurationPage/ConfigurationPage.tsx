import React, { useState } from 'react';
import { SectionList, StyleSheet } from 'react-native';
import CenteredText from '../../Components/CenteredText';
import CustomButton from '../../Components/CustomButton';
import CustomView from '../../Components/CustomView';
import ListItem from '../../Components/ListItem';
import AddPetModal from '../../Components/Modals/AddPetModal';
import AddPlayerModal from '../../Components/Modals/AddPlayerModal';
import AddStepsModal from '../../Components/Modals/AddStepsModal';
import AddWeaponModal from '../../Components/Modals/AddWeaponModal';
import { useGameContext } from '../../GameConfig/GameContext';
import { SectionsEnum } from '../../GameData/Enums';

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

  const [addStepsModalVisible, setAddStepsModalVisible] =
    useState<boolean>(false);

  const [addPlayerModalVisible, setAddPlayerModalVisible] =
    useState<boolean>(false);

  const [addWeaponModalVisible, setAddWeaponModalVisible] =
    useState<boolean>(false);

  const [addPetModalVisible, setAddPetModalVisible] = useState<boolean>(false);

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
      setAddPlayerModalVisible(true);
    } else if (section == SectionsEnum.PETS) {
      setAddPetModalVisible(true);
    } else if (section == SectionsEnum.WEAPONS) {
      setAddWeaponModalVisible(true);
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
      <AddPlayerModal
        modalVisible={addPlayerModalVisible}
        setModalVisible={setAddPlayerModalVisible}
      />
      <AddPetModal
        modalVisible={addPetModalVisible}
        setModalVisible={setAddPetModalVisible}
      />
      <AddWeaponModal
        modalVisible={addWeaponModalVisible}
        setModalVisible={setAddWeaponModalVisible}
      />
    </CustomView>
  );
};

export default ConfigurationPage;
