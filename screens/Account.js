import React from 'react';
import { View,TouchableOpacity, StyleSheet,Text,TextInput,Button } from 'react-native';


export default function Account() {
  return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Mon compte</Text>
        <Text style={styles.textConnexion}>Connexion</Text>
        <TouchableOpacity style={styles.container}>
          <TextInput style={styles.textinput} placeholder='Identifiant'/>
          <TextInput style={styles.textinput} placeholder='Mot de passe'/>
          <Button style={styles.button}
                  color='#ffffff'
                  title='Se connecter' onPress={() => {}}/>
        </TouchableOpacity>
      </View>
  );
}

Account.navigationOptions = {
  title: 'VeloCities',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#34aaa2',
  },
  textHeader: {
    fontSize:50,
    color:'#ffffff',
    textAlign:'center'
  },
  textConnexion: {
    fontSize:30,
    color:'#60D4B2',
    textAlign:'center'
  },
  button: {
    backgroundColor: '#e05a47',
    fontSize:35,
    color:'#ffffff'
  },
  textinput:{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    color:'#ffffff',
    fontSize:20
  }
});
