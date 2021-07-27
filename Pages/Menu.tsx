import React from 'react';
import { Text, StyleSheet, Alert } from 'react-native';

import CustomView from '../Components/CustomView';
import CustomButton from '../Components/CustomButton';
import CenteredText from '../Components/CenteredText';

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
