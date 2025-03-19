import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import Home from './screens/Home';
import EnviarRaioX from './screens/EnviarRaioX';
import TelaAnalises from './screens/TelaAnalises';
import ImportarRaio from './screens/TelaImportar';
import TelaPergunta from './screens/TelaPergunta';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen name = 'Home' component={Home} />
          <Stack.Screen name = 'EnviarRaio' component={EnviarRaioX} />
          <Stack.Screen name = 'TelaAnalises' component={TelaAnalises} />
          <Stack.Screen name = 'TelaImportar' component={ImportarRaio} />
          <Stack.Screen name = 'TelaPergunta' component={TelaPergunta} />
        </Stack.Navigator>
      </NavigationContainer>

    




  );
}


