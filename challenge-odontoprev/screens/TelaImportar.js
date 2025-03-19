import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function ImportarRaio() {
    return(
        <View style={styles.container}>
            <Image style={styles.imagem}
                            source={require('../assets/icon_galery.png')}
            />
            <TouchableOpacity style={styles.btn} onPress={() => navigate('TelaAnalises')}>
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
      
    },
    imagem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Noto Sans SC',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#5D5B5B',
      textAlign: 'center',
      padding: 10
    },
    btn: {
        margin: 5,
        padding: 1,
        backgroundColor: '#0066FF',
        color: '#FFF',
        borderRadius: 20,
        fontWeight: 'bold'
    }
  });