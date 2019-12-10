import React, {Component} from 'react';
import {View,Text} from "react-native";

class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            stations:[]
        }
    }

    fetchStations(){
        fetch("https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&facet=nom" +
            "&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles" +
            "&facet=nombrevelosdisponibles&rows=55")
            .then(response => response.json())
            .then(data => this.setState({ // ajoute les stations
                stations: [...this.state.stations,...data.stations]
            }));

    };

    render() {
        return (
            <View>
                <Text>
                    Liste des stations
                    {this.fetchStations()}
                </Text>
            </View>
        );
    }
}

export default CardScreen;