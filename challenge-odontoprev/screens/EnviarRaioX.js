import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation} from '@react-navigation/native';


export default function EnviarRaioX() {
  const { navigate } = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Gostaria de enviar seu último Raio-X para uma análise preditiva por IA para ajudar seu médico em seu diagnóstico?</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('TelaAnalises')}>
                                <Text style={styles.botao}>Sim, eu autorizo o envio do meu úlltimo Raio -x.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('TelaImportar')}>
                                <Text style={styles.botao}>Sim, gostaria de enviar a foto do meu Raio X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('TelaAnalises')}>
                                <Text style={styles.botao}>Não. Envie meu Raio-X apenas para meu dentista.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: 'Noto Sans SC',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover'
      
    },
    logo: {
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    title: {
      fontFamily: 'Noto Sans SC',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#5D5B5B',
      textAlign: 'center',
      padding: 10
    },
    texto: {
      padding: 10,
      alignItems: 'center',
      color: '#FFFFFF',
      textAlign: 'center'
    },
    botao: {
      margin: 10,
      padding: 1,
      backgroundColor: '#0066FF',
      color: '#FFF',
      borderRadius: 20,
      fontWeight: 'bold'
    }
  });