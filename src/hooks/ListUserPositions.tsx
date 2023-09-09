import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { UseLocation } from '../hooks/UseLocation'

interface Location {
    latitude: number;
    longitude: number;
}

const ListUserPositions = () => {
    const [positions, setPositions] = useState<Location[]>([]);
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            const loc = await UseLocation();
            setLocation(loc);
        };
        fetchLocation();
    }, []);

    useEffect(() => {
        if (location) {
            // Adiciona a nova posição à lista
            setPositions((prevPositions) => [...prevPositions, location]);
        }
    }, [location]);

    return (
        <View>
            <Text>Lista de posições:</Text>
            <View>
                {positions.map((position, index) => (
                    <Text key={index}>
                        Latitude: {position.latitude}, Longitude: {position.longitude}
                    </Text>
                ))}
            </View>
        </View>
    );
};

export default ListUserPositions;
