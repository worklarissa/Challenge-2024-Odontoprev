import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import EnviarRaioX from './screens/EnviarRaioX';
import TelaAnalises from './screens/TelaAnalises';
import ImportarRaio from './screens/TelaImportar';
import TelaPergunta from './screens/TelaPergunta';

const Stack = createNativeStackNavigator<RootStackParamList>();


export type RootStackParamList = {
  Home: undefined;
  EnviarRaioX: undefined;
  ImportarRaio: undefined;
  TelaAnalises: { // Adicione os parâmetros
    resultadoAnalise: { 
      output_image: any; 
      predictions: any 
    }[];
    imagemUri: string;
  };
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
        <Stack.Screen name="EnviarRaioX" component={EnviarRaioX} />
        <Stack.Screen name="ImportarRaio" component={ImportarRaio} />
        <Stack.Screen name="TelaAnalises" component={TelaAnalises} />
        <Stack.Screen name="TelaPergunta" component={TelaPergunta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}