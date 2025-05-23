import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'


export default function Home() {
     const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(
        <View style={styles.container}>
              <Image style={styles.logo}
                source={require('../assets/icon.png')}
              />
              <Text style={styles.title} >Bem-vindo(a) à atualização diária sobre sua saúde bucal!</Text>
              <Text style={styles.texto} >Essas informações são muito importantes para o seu dentista e vão ajudar no seu tratamento. Além disso, ao trazer essas informações, você acumula pontos que podem ser trocados futuramente.</Text>
              <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('EnviarRaioX')}>
                    <Text style={styles.botao}>COMEÇAR</Text>
              </TouchableOpacity>
                   
    
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0066FF',
      fontFamily: 'Noto Sans SC',
      alignItems: 'center',
      justifyContent: 'center' 
    },
    logo: {
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    title: {
      fontFamily: 'Noto Sans SC',
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
    texto: {
      padding: 10,
      alignItems: 'center',
      color: '#FFFFFF',
      textAlign: 'center'
    },
    botao: {
      display: 'flex',  
      padding: 5,
      backgroundColor: '#FFFFFF',
      color: '#FF6052',
      fontWeight: 'bold',
      borderRadius: 10,
      fontSize: 15,
      gap: 10
    }
  });