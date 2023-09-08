import React from 'react'
import {
    View, // container
    Text, //texto normal
    StyleSheet, // basicamente um css
    TouchableOpacity, //vai funcionar como um botão
} from 'react-native';
import { UseLocation } from '../hooks/UseLocation';

export default function Pagina1({ navigation }) {
    return (
        <UseLocation />
    );
}