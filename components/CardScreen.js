import React, {Component} from 'react';
import {View, Text} from "react-native";
import axios from "axios";

class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: []
        }
    }

    fetchStations() {
        /*fetch("http://localhost:8000/stations")
            .then(response => response.json())
            .then(data => this.setState({ // ajoute les stations
                stations: [...this.state.stations,...data.stations]
            }));*/
        axios.get("http://localhost:8000/stations").then((response) => {
            this.setState({stations: response.data});
            console.log(this.state.stations)
        });
    };

    componentDidMount() {
        this.fetchStations();
    }

    render() {
        return (
            <View>
                <Text>Liste des stations</Text>
                <View>
                    {
                        this.state.stations.map(station => {
                            return <Text key={station.idStation}>
                                {station.name} {station.bikesAvailable} {station.slotsAvailable} {station.state}
                            </Text>
                        })
                    }
                </View>
            </View>
        );
    }
}

export default CardScreen;