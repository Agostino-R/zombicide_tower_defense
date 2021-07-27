import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './Pages/Menu';
import GamePage from './Pages/GamePage';
import ConfigurationPage from './Pages/ConfigurationPage';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="GamePage" component={GamePage} />
        <Drawer.Screen name="ConfigurationPage" component={ConfigurationPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
