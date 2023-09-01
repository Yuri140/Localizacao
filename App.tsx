import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { UseLocation } from './src/hooks/UseLocation';



const App = () => {
  return (
    <View style={styles.container}>
      <UseLocation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default App;

