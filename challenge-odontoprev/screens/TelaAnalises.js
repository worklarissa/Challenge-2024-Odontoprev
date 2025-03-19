import React, { useState, useEffect } from "react";
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function TelaAnalises() {
  const route = useRoute();
  const navigation = useNavigation();
  const { resultadoAnalise, imagemUri } = route.params || {};
  const [predicoes, setPredicoes] = useState([]);
  const [contagem, setContagem] = useState({});

  useEffect(() => {
    if (resultadoAnalise && resultadoAnalise[0]?.predictions?.predictions) {
      const todasPredicoes = resultadoAnalise[0].predictions.predictions;
      setPredicoes(todasPredicoes);
      
      const contagemClasses = todasPredicoes.reduce((acc, item) => {
        const classe = item.class;
        acc[classe] = (acc[classe] || 0) + 1;
        return acc;
      }, {});
      
      setContagem(contagemClasses);
    }
  }, [resultadoAnalise]);

  const getCorClasse = (classe) => {
    const cores = {
      "Abscesso apical": "#9E9E9E",
      "Carie": "#FF5252",
      "Coroa dentaria": "#2196F3",
      "Implante": "#009688",
      "Obturacao de canal radicular": "#4CAF50",
      "Pino pre-fabricado": "#FFC107",
      "Raiz residual": "#795548",
      "Restauracao de amalgama": "#9C27B0",
      "Restauracao de resina composta": "#3F51B5",
    };
    
    return cores[classe] || "#757575";
  };

  const renderItemResumo = ({ item }) => (
    <View style={[styles.resumoItem, { backgroundColor: getCorClasse(item[0]) }]}>
      <Text style={styles.resumoTexto}>{item[0]}</Text>
      <Text style={styles.resumoNumero}>{item[1]}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imagemContainer}>
          <Text style={styles.titulo}>Imagem Analisada</Text>
          {imagemUri ? (
            <Image source={{ uri: imagemUri }} style={styles.imagem} resizeMode="contain" />
          ) : (
            <View style={styles.imagemPlaceholder}>
              <Text>Imagem não disponível</Text>
            </View>
          )}
        </View>

        <View style={styles.resumoContainer}>
          <Text style={styles.titulo}>Resumo da Análise</Text>
          {Object.keys(contagem).length > 0 ? (
            <FlatList
              data={Object.entries(contagem)}
              renderItem={renderItemResumo}
              keyExtractor={(item) => item[0]}
              scrollEnabled={false}
              numColumns={2}
              columnWrapperStyle={styles.resumoLista}
            />
          ) : (
            <Text style={styles.mensagemVazia}>Nenhuma detecção encontrada</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("TelaPergunta")}
        >
          <Text style={styles.botaoVoltarTexto}>Continuar para Perguntas</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  imagemContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  imagem: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  imagemPlaceholder: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  resumoContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 15,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    minHeight: 150,
  },
  resumoLista: {
    justifyContent: "space-between",
  },
  resumoItem: {
    width: (width - 60) / 2,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resumoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    flex: 1,
  },
  resumoNumero: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  mensagemVazia: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 16,
  },
  botaoVoltar: {
    backgroundColor: "#0066FF",
    padding: 15,
    borderRadius: 20,
    margin: 15,
    alignItems: "center",
    marginBottom: 30,
  },
  botaoVoltarTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});