// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectLang from '../screens/SelectLang';
import Experience from '../screens/Experience';
import TestPage2 from '../screens/TestPage2';
import _layout from '../layout/_layout';
import TestPage3 from '../screens/TestPage3';
import TestPage4 from '../screens/TestPage4';
import TestPage from '../screens/TestPage';
import TestPage5 from '../screens/TestPage5.js';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const condition = 'test3'; // This can be any logic or state

  const renderTestPage = (props) => {
    switch (condition) {
      case 'test1':
        return <TestPage {...props} />;
      case 'test2':
        return <TestPage2 {...props} />;
      case 'test3':
        return <TestPage5 {...props} />;
      case 'test4':
        return <TestPage4 {...props} />;
      default:
        return <TestPage {...props} />;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select" component={SelectLang} options={{ headerShown: false }} />
        <Stack.Screen name="Experience" component={Experience} options={{ headerShown: false }} />
        <Stack.Screen name="Test" options={{ headerShown: false }}>
          {(props) => (
            <_layout>
              {/* <TestPage4 {...props} /> */}
              {renderTestPage(props)}
            </_layout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
