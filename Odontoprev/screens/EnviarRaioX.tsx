import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@react-navigation/core';

export default function EnviarRaioX() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gostaria de enviar seu último Raio-X para uma análise preditiva por IA para ajudar seu médico em seu diagnóstico?</Text>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigate('TelaImportar')}
      >
        <Text style={styles.textoBotao}>Sim, eu autorizo o envio do meu último Raio-X.</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigate('TelaImportar')}
      >
        <Text style={styles.textoBotao}>Sim, gostaria de enviar a foto do meu Raio-X</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigate('TelaImportar')}
      >
        <Text style={styles.textoBotao}>Não. Envie meu Raio-X apenas para meu dentista.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Noto Sans SC',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover'
  },
  title: {
    fontFamily: 'Noto Sans SC',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#5D5B5B',
    textAlign: 'center',
    padding: 10,
    marginBottom: 20
  },
  botao: {
    margin: 10,
    padding: 15,
    backgroundColor: '#0066FF',
    borderRadius: 20,
    width: '90%',
    alignItems: 'center'
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});