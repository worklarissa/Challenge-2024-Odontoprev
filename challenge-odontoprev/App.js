import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('./assets/logo_odontoprev.png')}
      />
      <Text style={styles.title} >Bem-vindo(a) à atualização diária sobre sua saúde bucal!</Text>
      
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Noto Sans SC',
    fontStyle: 'bold',
    color: 'FFFFFF'
  }
});
