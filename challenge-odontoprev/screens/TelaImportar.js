import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation} from '@react-navigation/native';

export default function ImportarRaio() {
  const { navigate } = useNavigation();

    return(
        <View style={styles.container}>
            <Image style={styles.imagem}
                            source={require('../assets/icon_galery.png')}
            />
            <TouchableOpacity style={styles.botao} onPress={() => navigate('TelaAnalises')}>
                 <Text>Tirar foto do exame Raio-X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigate('TelaPergunta')}>
                <Text>Acessar galeria para escolher foto do exame </Text>
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
    botao: {
      margin: 10,
      padding: 10,
      backgroundColor: '#0066FF',
      color: '#FFF',
      borderRadius: 20,
      fontWeight: 'bold'
    }
  });