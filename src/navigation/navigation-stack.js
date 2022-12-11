import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoldersListScreen from '../screens/folders-list';
import TemplatesListScreen from '../screens/templates-list';
import TemplatesDetailScreen from '../screens/templates-detail';
import * as Options from './navigation-option';

const Stack = createNativeStackNavigator();
export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={Options.StackOptions}>
        <Stack.Screen name="Folders" component={FoldersListScreen} />
        <Stack.Screen name="Templates" component={TemplatesListScreen} />
        <Stack.Screen
          name="Templates Detail"
          component={TemplatesDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
