import { View, Text, StyleSheet } from "react-native";

export function ModalPergunta(){
    return(
        <View style={styles.container}>
            <Text style={styles.per}>Gostaria de enviar seu último Raio-X para uma análise preditiva por IA para ajudar seu médico em seu diagnóstico?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    per: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})