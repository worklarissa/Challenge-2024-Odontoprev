import { SafeAreaView, FlatList, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

export default function TelaAnalises() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const renderItem = ({ item }) => {
      return (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.fact}</Text>
        </View>
      );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.length.toString()}
            />
          )}
        </SafeAreaView>
      );


}