import React, { useState, useEffect } from 'react';

import { View, Text, Button } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

 

const Local = () => {

  const [latitude, setLatitude] = useState(0);

  const [longitude, setLongitude] = useState(0);

 

  useEffect(() => {

    // Solicita permissão para acessar a localização

    Geolocation.requestAuthorization();

 

    // Obtém a posição geográfica do usuário

    Geolocation.getCurrentPosition(

      position => {

        const { latitude, longitude } = position.coords;

        setLatitude(latitude);

        setLongitude(longitude);

      },

      error => console.log(error),

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

 

export default Local;