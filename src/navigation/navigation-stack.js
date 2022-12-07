import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoldersListScreen from '../screens/folders-list';
import TemplatesListScreen from '../screens/templates-list';
import TemplatesDetailScreen from '../screens/templates-detail';

const Stack = createNativeStackNavigator();
export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Folders" component={FoldersListScreen} />
        <Stack.Screen name="Templates" component={TemplatesListScreen} />
        <Stack.Screen
          name="TemplatesDetail"
          component={TemplatesDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
