import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import EnviarRaioX from './screens/EnviarRaioX';
import TelaAnalises from './screens/TelaAnalises';
import ImportarRaio from './screens/TelaImportar';
import TelaPergunta from './screens/TelaPergunta';

const Stack = createNativeStackNavigator()

// navigationTypes.ts
export type RootStackParamList = {
  Home: undefined;
  EnviarRaioX: undefined;
  ImportarRaio: undefined;
  TelaAnalises: undefined;
  TelaPergunta: undefined;
  TelaDestino: undefined;
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EnviarRaio" component={EnviarRaioX} />
        <Stack.Screen name="TelaImportar" component={ImportarRaio} />
        <Stack.Screen name="TelaAnalises" component={TelaAnalises} />
        <Stack.Screen name="TelaPergunta" component={TelaPergunta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}