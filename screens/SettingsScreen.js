import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native'
import axios from "axios";

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {// initialisation de 2 tableaux vides
            users: [],
            cities: []
        }
    }

    fetchUsers() {
        // Appel au server API pour récupérer la liste des Utilisateurs => users
        axios.get("http://92.167.212.55/users").then((response) => {
            this.setState({users: response.data});
        });
    };

    fecthCities() {
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
        const renderCities = () => {
            if (this.state.cities.length > 1) {
                return (
                    <FlatList data={this.state.cities} renderItem={({item}) => <Text>{item.name}</Text>}
                              keyExtractor={(item, index) => index.toString()}/>
                )
            } else {
                return <ActivityIndicator animation="true" size="large" color="#e05a47"/>
            }
        };

        const renderUsers = () => {
            if (this.state.users.length > 1) {
                return (
                    <FlatList data={this.state.users}
                              renderItem={({item}) => <Text>{item.username} {item.birthday}</Text>}
                              keyExtractor={(item, index) => index.toString()}/>
                )
            } else {
                return <ActivityIndicator animation="true" size="large" color="#e05a47"/>
            }
        };

        return (
            <View>
                <Text>Settings</Text>
                <Text>Liste des villes:</Text>
                {renderCities()}
                <Text>Liste des users:</Text>
                {renderUsers()}
            </View>
        );
    }
}

export default SettingsScreen;

SettingsScreen.navigationOptions = {
    title: 'VeloCities'
};