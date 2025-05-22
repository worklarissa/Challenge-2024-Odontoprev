import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList } from '../App.js';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export default function ImportarRaio() {
  type NavigationProp = NativeStackNavigationProp<
  RootStackParamList, 
  'ImportarRaio'>;

  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(false);
  
  const escolherDaGaleria = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua galeria');
      return;
    }
    
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      if (!result.canceled) {
        processarImagem(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível selecionar a imagem');
      console.error(error);
    }
  };
  
  const processarImagem = async (imageUri:string) => {
    setLoading(true);
    
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onloadend = () => {
          if (reader.result) {
            const parts = (reader.result as string).split(',');
            const base64 = parts[1];
            resolve(base64);
          } else {
            reject(new Error('Falha na leitura do arquivo: resultado nulo'));
          }
        };
        
        reader.onerror = (error) => {
          reject(new Error('Falha na leitura do arquivo'));
        };
        
        reader.readAsDataURL(blob);
      });
      
      const apiResponse = await fetch('https://detect.roboflow.com/infer/workflows/sprints/challenge-2025', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: 'sZchoV6isg8oCR50Ocfo',
          inputs: {
            "image": { "type": "base64", "value": base64Data }
          }
        })
      });
      
      if (!apiResponse.ok) {
        throw new Error(`Erro na API: ${apiResponse.status}`);
      }
      
      const result = await apiResponse.json();
      
      if (result && result.outputs && result.outputs.length > 0) {
        const formattedResult = [
          {
            output_image: result.outputs[0].output_image,
            predictions: result.outputs[0].predictions
          }
        ];
        
        navigation.navigate("TelaAnalises", { resultadoAnalise: formattedResult, imagemUri: imageUri });
      } else {
        throw new Error('Formato de resposta inválido');
      }
      
    } catch (error) {
      Alert.alert(
        'Erro na análise',
        'Não foi possível analisar a imagem. Por favor, tente novamente com outra imagem.',
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../assets/icon_galery.png")}
      />
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0066FF" />
          <Text style={styles.loadingText}>Processando imagem...</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.botao}
          onPress={escolherDaGaleria}
        >
          <Text style={styles.botaoTexto}>Acessar galeria para escolher foto do exame</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  imagem: {
    width: 120,
    height: 120,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    width: '100%',
    margin: 10,
    padding: 15,
    backgroundColor: "#0066FF",
    borderRadius: 20,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  }
});