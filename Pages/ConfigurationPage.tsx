import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import CustomView from '../Components/CustomView';

import ParameterSection from '../Components/ParameterSection';

import {
  StepTypeEnum,
  GameElementColorsEnum,
  SectionsEnum,
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
});

const ConfigurationPage = () => {
  const [waveNumber, setWaveNumber] = useState<number>(0);
  const [steps, setSteps] = useState<StepTypeEnum[]>([
    StepTypeEnum.REST,
    StepTypeEnum.SPAWN,
    StepTypeEnum.SPAWN,
  ]);

  const [siegeEngines, setSiegeEngines] = useState<GameElement[]>([
    { name: 'Baliste', rechargeTime: 5, color: GameElementColorsEnum.BLUE },
  ]);

  const [players, setPlayers] = useState<GameElement[]>([
    { name: 'Ago', rechargeTime: 5, color: GameElementColorsEnum.BLUE },
  ]);

  const [pets, setPets] = useState<GameElement[]>([
    { name: 'Chat', rechargeTime: 5, color: GameElementColorsEnum.BLUE },
  ]);

  function onDeleteItem(indexToDelete: number, section: SectionsEnum) {
    if (section == SectionsEnum.WAVES) {
      steps.splice(indexToDelete, 1);
      setSteps([...steps]);
    } else if (section == SectionsEnum.PLAYERS) {
      players.splice(indexToDelete, 1);
      setPlayers([...players]);
    } else if (section == SectionsEnum.PETS) {
      pets.splice(indexToDelete, 1);
      setPets([...pets]);
    } else if (section == SectionsEnum.SIEGE_ENGINES) {
      siegeEngines.splice(indexToDelete, 1);
      setSiegeEngines([...siegeEngines]);
    }
  }

  return (
    <CustomView>
      <Text style={styles.waveText}>Vague numéro : {waveNumber}</Text>
      <ParameterSection
        title={SectionsEnum.WAVES}
        elemList={steps}
        onDeleteItem={index => onDeleteItem(index, SectionsEnum.WAVES)}
      />
      <ParameterSection
        title={SectionsEnum.PLAYERS}
        elemList={players}
        onDeleteItem={index => onDeleteItem(index, SectionsEnum.PLAYERS)}
      />
      <ParameterSection
        title={SectionsEnum.PETS}
        elemList={pets}
        onDeleteItem={index => onDeleteItem(index, SectionsEnum.PETS)}
      />
      <ParameterSection
        title={SectionsEnum.SIEGE_ENGINES}
        elemList={siegeEngines}
        onDeleteItem={index => onDeleteItem(index, SectionsEnum.SIEGE_ENGINES)}
      />
    </CustomView>
  );
};

export default ConfigurationPage;
