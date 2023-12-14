import React from "react";
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import foto from "../assets/bg_init.png";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const Logincontext = React.createContext({ isloggedin: false, setIsLoggedIn: null });

const Login = ({navigation}) => {
  //const [isloggedin, setIsLoggedIn] = React.useState(true); //cambio a false

  const { setIsLoggedIn } = React.useContext(Logincontext);
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("")
  const database = [
    {
      correo: "Vendedor",
      contraseña: "123",
      tipoUsuario: "Vendedor",
      nombre: "Viri"
    },
    {
      correo: "Cliente",
      contraseña: "321",
      tipoUsuario: "Cliente",
      nombre: "Leydi"
    },
    {
      correo: "Cobrador",
      contraseña: "456",
      tipoUsuario: "Cobrador",
      nombre: "Edith"
    },
    {
      correo: "Supervisor",
      contraseña: "654",
      tipoUsuario: "Supervisor",
      nombre: "Raúl"
    }]


  const enviarFormulario = () => {
    if ((Correo === "" && Contraseña === "") ||
        (Correo !== "" && Contraseña === "") ||
        (Correo === "" && Contraseña !== "")) {
       alert("Correo o Contraseña incorrectas")
    } else {
      return enviarUsuario();
    }
  };

  const enviarUsuario = () => {
    let response = ""
    database.forEach(datos => {
      if (datos.correo === Correo){
        datos.contraseña === Contraseña ? response = {access: "access", name: datos.nombre, tipeUser: datos.tipoUsuario} : response = { access: "denied"}
      }
    })
    if (response === "") response = {access: "denied"}
    return response
  }

  return (
    <View style={styles.container}>
      <Image
        source={foto}
        style={styles.img}
      />
      <Text style={styles.title}>FOCA</Text>
      <Text style={styles.subtitulo}>Ingresa tus datos</Text>


      <TextInput
        placeholder="nombre_usuario"
        style={styles.textInput}
        onChangeText={setCorreo}
        value={Correo}

      />
      <TextInput
        placeholder="contraseña"
        style={styles.textInput}
        secureTextEntry
        onChangeText={setContraseña}
        value={Contraseña}
      />
      <TouchableOpacity        
        onPress = {() => {
          const dato = enviarFormulario()
          if (dato.access === "access") {
            navigation.navigate("Bienvenido", {
              name: dato.name,
              tipeUser: dato.tipeUser
            })
          } else {
            alert("Correo o contraseña incorrecta")
          }
        }}
        style={styles.button}
      >
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  )

};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00FFFF" },
  title: { fontSize: 50, color: '#000000' },
  subtitulo: {
    fontSize: 20,
    color: '#7F8C8D'
  },


  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#D5DBDB'
  }


  ,
  button: {
    backgroundColor: '#2874A6',
    padding: 10,
    marginTop: 10,
    width: '80%',
    borderRadius: 15,
    paddingStart: 130
  },
  img: {
    width: 500,
    height: 200,
  }

})

export default Login;

