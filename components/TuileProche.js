import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export class TuileProche extends Component {
    render() {
        let {title} = this.props
        return (
            <TouchableOpacity style={styles.container}
                  onPress={() => alert('Pressed')}>
                <Text style={styles.content}>Station la plus proche de moi</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#60D4B2',
        padding: 5,
        margin: 15,
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