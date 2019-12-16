import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from "react-native";
import axios from "axios";
import StationItem from "./StationItem";

class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: [] // Objet Station dans le state
        }
    }

    fetchStations() {
        // Appel au server API pour récupérer la liste des stations => stations
        axios.get("http://92.167.212.55/stations").then((response) => {
            this.setState({stations: response.data});
        });
    };

    componentDidMount() {
        // Au chargement du module, lancement de la fonction d'appel à l'API
        this.fetchStations();
    }

    render() {
        // Fonction qui permet
        const renderBikeList = () => {
            if (this.state.stations.length > 1) {
                return <View>
                    {
                        this.state.stations.map(station => {
                            return (
                                <StationItem key={station._id}
                                             name={station.name}
                                             bikesAvailable={station.bikesAvailable}
                                             slotsAvailable={station.slotsAvailable}
                                             state={station.state}/>
                            );
                        })
                    }
                </View>
            } else {
                return <ActivityIndicator animation="true" size="large" color="#00aa00"/>
            }
        };

        return (
            <View>
                <Text>Liste des stations</Text>
                {renderBikeList()}
            </View>
        );
    }
}

export default CardScreen;