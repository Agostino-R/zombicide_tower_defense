import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './Pages/Menu';
import GamePage from './Pages/GamePage';
import ConfigurationPage from './Pages/ConfigurationPage/ConfigurationPage';
import {
  GameContext,
  GameStatus,
  initialStatus,
} from './GameConfig/GameContext';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

function App() {
  const [status, setStatus] = useState<GameStatus>(initialStatus);
  return (
    <GameContext.Provider value={{ status, setStatus }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="GamePage" component={GamePage} />
          <Drawer.Screen
            name="ConfigurationPage"
            component={ConfigurationPage}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GameContext.Provider>
  );
}

export default App;
