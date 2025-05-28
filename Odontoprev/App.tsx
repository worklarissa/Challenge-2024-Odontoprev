import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import EnviarRaioX from './screens/EnviarRaioX';
import TelaAnalises from './screens/TelaAnalises';
import ImportarRaio from './screens/TelaImportar';
import TelaPergunta from './screens/TelaPergunta';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebase';
import type { User } from 'firebase/auth';





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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

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