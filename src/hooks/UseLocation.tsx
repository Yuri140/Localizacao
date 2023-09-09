import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

export async function UseLocation() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    // Solicita permissão para acessar a localização
    Geolocation.requestAuthorization();

    // Obtém a posição geográfica do usuário
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Erro ao obter a localização:', error);
      }
    );
  }, []);

  return location;
}
