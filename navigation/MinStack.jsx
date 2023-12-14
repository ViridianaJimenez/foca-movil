import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Bienvenido from "../views/Perfil/bienvenido";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Inicio de sesión"
                    component={Login}
                />

                <Stack.Screen
                    name="Bienvenido"
                    component={Bienvenido}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack
