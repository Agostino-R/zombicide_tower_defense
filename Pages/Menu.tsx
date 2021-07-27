import React from 'react';
import { Text, StyleSheet, Alert } from 'react-native';

import CustomView from '../Components/CustomView';
import CustomButton from '../Components/CustomButton';

const styles = StyleSheet.create({
  menuTitle: {
    fontSize: 50,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

const Menu = ({ navigation }) => {
  return (
    <CustomView>
      <Text style={styles.menuTitle}>Zombicide Tower Defense</Text>

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
