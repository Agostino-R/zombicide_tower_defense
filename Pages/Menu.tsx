import React from 'react';
import CenteredText from '../Components/CenteredText';
import CustomButton from '../Components/CustomButton';
import CustomView from '../Components/CustomView';
import { useGameContext } from '../GameConfig/GameContext';
import { generateInitialStatus } from '../GameConfig/utils';

const Menu = ({ navigation }) => {
  const { setStatus } = useGameContext();
  return (
    <CustomView>
      <CenteredText>Zombicide Tower Defense</CenteredText>

      <CustomButton
        title={'Nouvelle partie'}
        onPress={() => {
          {
            setStatus(generateInitialStatus());
            navigation.navigate('ConfigurationPage');
          }
        }}
      />

      {/* Pour quand le localStorage fonctionnera */}
      {/* <CustomButton
        title={'Continuer'}
        onPress={() => Alert.alert('Left button pressed')}
      /> */}
    </CustomView>
  );
};

export default Menu;
