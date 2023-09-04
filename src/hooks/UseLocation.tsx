import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { collection } from "firebase/firestore";
import Geolocation from '@react-native-community/geolocation';
import db from '../config/firebaseconfig';

export function UseLocation() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const local = collection(db, "localizacoes");


  useEffect(() => {
    // Solicita permissão para acessar a localização
    Geolocation.requestAuthorization();

    // Obtém a posição geográfica do usuário
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        // Envie a latitude e longitude para o Firestore
        try {
          await db.collection('localizacoes').add({
            latitude,
            longitude,
          });
        } catch (error) {
          console.error('Erro ao enviar dados para o Firestore:', error);
        }
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sua posição geográfica:</Text>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};
