import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export class TuileItem extends Component {
    render() {
        let {title} = this.props
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.content}>{title}</Text>
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
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#7e7e7e',
        alignItems:'center',
    },
    content:{
        color:'#e05a47',
        fontSize:30,
        fontStyle:'normal'
    }
});