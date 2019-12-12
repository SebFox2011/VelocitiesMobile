import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from "react-native";
import axios from "axios";
import StationItem from "./StationItem";

class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: []
        }
    }

    fetchStations() {
        axios.get("http://localhost:8000/stations").then((response) => {
            this.setState({stations: response.data});
        });
    };

    componentDidMount() {
        this.fetchStations();
    }

    render() {
        const renderBikeList = () => {
            if (this.state.stations.length > 1) {
                return <View>
                    {
                        this.state.stations.map(station => {
                            return <Text key={station.idStation}>
                                {station.name} {station.bikesAvailable} {station.slotsAvailable} {station.state}
                            </Text>
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
                <StationItem stations={this.state.stations}/>
            </View>
        );
    }
}

export default CardScreen;