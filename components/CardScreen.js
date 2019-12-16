import React, {Component} from 'react';
import {StyleSheet,Dimensions, Text,ScrollView,View} from "react-native";
import MapView from 'react-native-maps'
import StationList from "../components/StationList";

export default class CardScreen extends Component {
    constructor() {
        super();
        this.state={
            region: {
                latitude: 48.0978255,
                longitude: -1.6847536,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        }
    }
    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>Carte google maps</Text>
                    <MapView style={styles.mapStyle}
                             region={this.state.region}
                             onRegionChange={(region) => this.onRegionChange}/>
                    <StationList/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34aaa2',
        alignItems:'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/2,
        marginLeft: 5,
        marginRight: 5,
    }
});