import React from 'react';
import { View, Text } from 'react-native';
import ListUserPositions from '../hooks/ListUserPositions';

const PositionsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ListUserPositions />
        </View>
    );
};

export default PositionsScreen;
