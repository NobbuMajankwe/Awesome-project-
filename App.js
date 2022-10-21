import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeView from './src/WelcomeView';
import ButtonView from './src/ButtonView';
import LastView from './src/LastView';
//import { Provider } from 'react-redux';
//import store from './src/store';
const Stack = createNativeStackNavigator();

export default function App(){
return(
 <NavigationContainer>
       <Stack.Navigator >
         <Stack.Screen
           name="Welcome"
           component={WelcomeView} />
         <Stack.Screen
          name="Variations"
          component={ButtonView} />
         <Stack.Screen
          name="LastView"
          component={LastView} />
       </Stack.Navigator>
     </NavigationContainer>
);
}
