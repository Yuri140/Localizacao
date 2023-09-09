import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListUserPositions from '../hooks/ListUserPositions';
import { UseLocation } from '../hooks/UseLocation';

interface Location {
  latitude: number;
  longitude: number;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCaptureLocation = async () => {
    const location = await UseLocation();
    console.log(location); // Faça o que quiser com a localização
  };

  const handleGoToPositions = () => {
    navigation.navigate('Pagina1');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Clique nos botões abaixo:</Text>
      <TouchableOpacity onPress={handleCaptureLocation}>
        <Text>Capturar Localização</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoToPositions}>
        <Text>Ver Posições</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
