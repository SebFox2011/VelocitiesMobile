import React, {Component} from 'react';
import {ActivityIndicator,FlatList, Text, SafeAreaView, StyleSheet, View} from 'react-native'
import axios from "axios";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      users:[],
      cities:[]
    }
  }

  fetchUsers() {
    // Appel au server API pour récupérer la liste des Utilisateurs => users
    axios.get("http://92.167.212.55/users").then((response) => {
      this.setState({users: response.data});
    });
  };

  fecthCities(){
    // Appel au server API pour récupérer la liste des villes => cities
    axios.get("http://92.167.212.55/cities").then((response) => {
      this.setState({cities: response.data});
    });
  };

  componentDidMount() {
    // Au chargement du module, lancement de la fonction d'appel à l'API
    this.fetchUsers();
    this.fecthCities();
  }

  render() {
    const renderCitiesUsers = () => {
      if (this.state.users.length > 1 && this.state.cities.length > 1) {
        return (
            <SafeAreaView>
              <Text>Liste des villes:</Text>
              <FlatList data={this.state.cities}
                        renderItem={({item}) => <Text>{item.name}</Text>}
                        keyExtractor={(item,index) => index.toString()}/>
              <Text>Liste des users:</Text>
              <FlatList data={this.state.users}
                        renderItem={({item}) => <Text>{item.username}</Text>}
                        keyExtractor={(item,index) => index.toString()}/>
            </SafeAreaView>
        )
          }
      else {
        return <ActivityIndicator animation="true" size="large" color="#e05a47"/>
      }
    };

    return (
        <View>
          <Text>Settings</Text>
          {renderCitiesUsers()}
        </View>

    );
  }
}

export default SettingsScreen;

SettingsScreen.navigationOptions = {
  title: 'VeloCities',
};