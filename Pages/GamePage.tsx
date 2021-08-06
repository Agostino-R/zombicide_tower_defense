import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import CenteredText from '../Components/CenteredText';
import CustomButton from '../Components/CustomButton';
import CustomView from '../Components/CustomView';
import GamePageListItem from '../Components/GamePageListItem';
import { useGameContext } from '../GameConfig/GameContext';
import { generateInitialStatus } from '../GameConfig/utils';
import { SectionsEnum } from '../GameData/Enums';

const GamePage = ({ navigation }) => {
  const { status, setStatus } = useGameContext();
  const [gameEnd, setGameEnd] = useState<boolean>(false);

  useEffect(() => {
    if (gameEnd === true) {
      navigation.navigate('EndPage');
    }
  }, [gameEnd]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setStatus(generateInitialStatus());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <CustomView>
      <CenteredText>Vague : {status.waveNumber}</CenteredText>
      <CenteredText>Etape : {status.steps[status.waveNumber]}</CenteredText>
      <SectionList
        sections={[
          {
            title: SectionsEnum.PLAYERS,
            data: status.players,
          },
          {
            title: SectionsEnum.PETS,
            data: status.pets,
          },
          {
            title: SectionsEnum.WEAPONS,
            data: status.weapons,
          },
        ]}
        renderItem={({ item, index, section }) => (
          <GamePageListItem
            gameElement={item}
            section={section.title}
            currentWaveNumber={status.waveNumber}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section }) => (
          <CenteredText>{section.title}</CenteredText>
        )}
      />
      <CustomButton
        title={'Tour suivant'}
        onPress={() => {
          if (status.waveNumber == status.steps.length - 1) {
            setGameEnd(true);
          } else {
            status.waveNumber += 1;
            setStatus({ ...status });
          }
        }}
      />
    </CustomView>
  );
};

export default GamePage;
