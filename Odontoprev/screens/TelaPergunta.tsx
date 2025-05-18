import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  TelaDestino: undefined;
};

export default function TelaPergunta() {
    const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
    const [text, onChangeText] = React.useState('Descreva sua dor');

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Você está sentindo alguma dor ou desconforto em sua boca? Se sim, descreva essa dor ou desconforto.</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
                    <TouchableOpacity style={styles.botao} onPress={() => navigate('TelaDestino')}>
                                                    <Text style={styles.botao}>Enviar</Text>
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
      padding: 10,
      justifyContent: 'center'
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
    },
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        width: 300,
        height: 200,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'center'
    }
  });