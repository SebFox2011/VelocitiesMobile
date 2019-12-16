import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native"

class StationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={styles.container}>
                <Text>{this.props.name} {this.props.bikesAvailable} {this.props.slotsAvailable} {this.props.state}</Text>
            </View>

        );
    }
}
export default StationItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#60D4B2',
        padding: 5,
        margin: 10,
        marginBottom:5,
        marginTop:5,
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#7e7e7e',
        alignItems:'center',
    },
    content:{
        color:'#e05a47',
        fontSize:20,
        fontStyle:'normal'
    }
});

