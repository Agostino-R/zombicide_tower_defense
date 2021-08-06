import React, { useState } from 'react';
import CenteredText from '../Components/CenteredText';
import CustomButton from '../Components/CustomButton';
import CustomView from '../Components/CustomView';
import { useGameContext } from '../GameConfig/GameContext';
import { generateInitialStatus } from '../GameConfig/utils';

const EndPage = ({ navigation }) => {
  const { setStatus } = useGameContext();

  return (
    <CustomView>
      <CenteredText>Vous avez terminé votre partie!</CenteredText>
      <CustomButton
        title={'Rejouer'}
        onPress={() => {
          setStatus(generateInitialStatus());
          navigation.navigate('ConfigurationPage');
        }}
      />
    </CustomView>
  );
};

export default EndPage;
