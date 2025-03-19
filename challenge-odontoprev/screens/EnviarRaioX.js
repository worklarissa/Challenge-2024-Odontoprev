import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function EnviarRaioX() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Gostaria de enviar seu último Raio-X para uma análise preditiva por IA para ajudar seu médico em seu diagnóstico?</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('EnviarRaio')}>
                                <Text style={styles.botao}>COMEÇAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('EnviarRaio')}>
                                <Text style={styles.botao}>COMEÇAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('EnviarRaio')}>
                                <Text style={styles.botao}>COMEÇAR</Text>
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
      padding: 10,
      backgroundColor: '',
      color: '#FF6052'
    }
  });