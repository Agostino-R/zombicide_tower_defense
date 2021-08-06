import React from 'react';
import { Alert } from 'react-native';
import CenteredText from '../Components/CenteredText';
import CustomButton from '../Components/CustomButton';
import CustomView from '../Components/CustomView';

const Menu = ({ navigation }) => {
  return (
    <CustomView>
      <CenteredText>Zombicide Tower Defense</CenteredText>

      <CustomButton
        title={'Nouvelle partie'}
        onPress={() => navigation.navigate('PageTest')}
      />

      <CustomButton
        title={'Continuer'}
        onPress={() => Alert.alert('Left button pressed')}
      />
    </CustomView>
  );
};

export default Menu;
