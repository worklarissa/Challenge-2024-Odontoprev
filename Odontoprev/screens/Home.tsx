import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useState } from 'react'
import { AuthService } from '../src/services/auth';



export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')

    const handleLogin = async () => {
        setCarregando(true)
        setErro('')
        try {
            await AuthService.login(email, senha)
            navigation.navigate('EnviarRaioX')
        } catch (error: any) {
            setErro(error.message || 'Erro ao fazer login')
        } finally {
            setCarregando(false)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../assets/icon.png')}
            />
            <Text style={styles.title}>Bem-vindo(a) à Odontoprev!</Text>
            
            {/* Campos de Login */}
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="#FFFFFF80"
                autoCapitalize="none"
                keyboardType="email-address"
            />
            
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
                placeholderTextColor="#FFFFFF80"
                secureTextEntry
            />

            {erro ? <Text style={styles.erro}>{erro}</Text> : null}

            <TouchableOpacity 
                style={styles.botao} 
                onPress={handleLogin}
                disabled={carregando}
            >
                <Text style={styles.botaoTexto}>
                    {carregando ? "Entrando..." : "Acessar Minha Conta"}
                </Text>
            </TouchableOpacity>

            <Text style={styles.texto}>Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0066FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        marginBottom: 40
    },
    title: {
        fontFamily: 'Noto Sans SC',
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 24,
        marginBottom: 30,
        textAlign: 'center'
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF20',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        color: '#FFFFFF',
        fontSize: 16
    },
    botao: {
        width: '100%',
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#0066FF',
        fontWeight: 'bold',
        fontSize: 16
    },
    texto: {
        padding: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 30
    },
    erro: {
        color: '#FFD700',
        marginVertical: 10,
        textAlign: 'center'
    }
})
