import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { UseLocation } from "../hooks/UseLocation";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pagina1")}
            >
                <Text>Obter Localização</Text>
                <UseLocation />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pagina2")}
            >
                <Text>PAGINA 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pagina3")}
            >
                <Text>PAGINA 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pagina4")}
            >
                <Text>PAGINA 4</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pagina5")}
            >
                <Text>PAGINA 5</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff9f9f",
        margin: 20,
        borderRadius: 10,
        height: "8%",
        width: "95%",
    },
});

/*
import Home from "./src/components/Home";
import FotoPage from "./src/components/FotoPage";
import Pagina1 from "./src/components/Pagina1";
import Pagina2 from "./src/components/Pagina2";
import Pagina3 from "./src/components/Pagina3";
import Pagina4 from "./src/components/Pagina4";
import Pagina5 from "./src/components/Pagina5";

import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#262626" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#f4a100" },
          cardStyleInterpolator: deslizar,
          headerTitleAlign: "center",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
          name="Pagina inicial"
          component={Home}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Início"
                onPress={() => {
                  navigation.navigate("Pagina inicial");
                }}
              />
            ),
          })}
          name="FotoPage"
          component={FotoPage}
        />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="Pagina3" component={Pagina3} />
        <Stack.Screen name="Pagina4" component={Pagina4} />
        <Stack.Screen name="Pagina5" component={Pagina5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/




