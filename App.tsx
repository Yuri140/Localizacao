import React, { useState, useEffect } from 'react';
import {
  View, // container
  Text, //texto normal
  StyleSheet, // basicamente um css
  TouchableOpacity, //vai funcionar como um botão
} from 'react-native';
import Home from "./src/View/Home";
import Pagina1 from "./src/View/Pagina1";
import { UseLocation } from './src/hooks/UseLocation';

const App = () => {
  const [isCapturing, setIsCapturing] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POC de Captura de Localização</Text>
      {!isCapturing ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCapturing(true)}
        >
          <Text style={styles.buttonText}>Iniciar Captura</Text>
        </TouchableOpacity>
      ) : (
        <UseLocation />
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F4A100',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
