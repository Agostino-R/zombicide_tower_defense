import React, { useState } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomView from '../Components/CustomView';
import ListItem from '../Components/ListItem';
import {
  GameElementColorsEnum,
  SectionsEnum,
  StepTypeEnum,
} from '../GameData/Enums';
import { GameElement } from '../GameData/Types';

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
  const [steps, setSteps] = useState<StepTypeEnum[]>([
    StepTypeEnum.REST,
    StepTypeEnum.SPAWN,
    StepTypeEnum.SPAWN,
  ]);

  const [weapons, setWeapons] = useState<GameElement[]>([
    { name: 'Baliste', rechargeTime: 5, color: GameElementColorsEnum.BLUE },
  ]);

  const [players, setPlayers] = useState<GameElement[]>([
    { name: 'Ago', rechargeTime: 5, color: GameElementColorsEnum.BLUE },
  ]);

  const [pets, setPets] = useState<GameElement[]>([
    { name: 'Chat', rechargeTime: 5, color: GameElementColorsEnum.BLUE },
  ]);

  const onDeleteItem = (indexToDelete: number, section: SectionsEnum) => {
    console.log(section);
    if (section == SectionsEnum.WAVES) {
      steps.splice(indexToDelete, 1);
      setSteps([...steps]);
    } else if (section == SectionsEnum.PLAYERS) {
      players.splice(indexToDelete, 1);
      setPlayers([...players]);
    } else if (section == SectionsEnum.PETS) {
      pets.splice(indexToDelete, 1);
      setPets([...pets]);
    } else if (section == SectionsEnum.WEAPONS) {
      console.log(indexToDelete);
      weapons.splice(indexToDelete, 1);
      setWeapons([...weapons]);
    }
  };

  return (
    <CustomView>
      <Text style={styles.waveText}>Vague numéro : {waveNumber}</Text>
      <SectionList
        sections={[
          { title: SectionsEnum.WAVES, data: steps.map(x => x.toString()) },
          {
            title: SectionsEnum.PLAYERS,
            data: players.map(x => x.name),
          },
          {
            title: SectionsEnum.PETS,
            data: pets.map(x => x.name),
          },
          {
            title: SectionsEnum.WEAPONS,
            data: weapons.map(x => x.name),
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
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderSectionFooter={({ section }) => (
          <CustomButton
            title={`Ajouter ${section.title}`}
            onPress={() => console.log('coucou')}
          />
        )}
      />
    </CustomView>
  );
};

export default ConfigurationPage;
