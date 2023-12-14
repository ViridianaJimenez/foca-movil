import React from "react";
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, Image} from 'react-native';


//const tipeClient = ['cliente', 'vendedor', 'cobrador', 'supervisor']

const Bienvenido = ({navigation, route}) => {
  
  const {name, tipeUser} = route.params
  
  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>Bienvenido {name}</Text>
      <Text style={styles.title}>Tipo de Usuario: {tipeUser}</Text>
      
      
      <TouchableOpacity
        onPress={() =>alert('Holiii')}
        style={styles.button}
      >
        <Text>Puchame</Text>
      </TouchableOpacity>
    </View>
  )

};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00FFFF" },
  title: { fontSize: 25, color: '#000000' },
  subtitulo: {
    fontSize: 20,
    color: '#7F8C8D' },
  textInput: {
    borderWidth:1, 
    borderColor: 'gray',
    padding:10,
    paddingStart: 30,
    width: '80%',
    height:50,
    marginTop:20,
    borderRadius:15,
    backgroundColor: '#D5DBDB'},
  button: {
    backgroundColor: '#2874A6',
    padding: 10,
    marginTop: 10,
    width: '80%',
    borderRadius: 15,
    paddingStart: 145
  },
  img:{
    width:500,
    height: 200,
  }

})

export default Bienvenido;