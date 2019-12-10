import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet,Button} from "react-native";

export class TuileItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title} = this.props
        return (
            <TouchableOpacity style={styles.container}
                              onPress={() => this.props.navigation.navigate('CardScreen')}>
                <Text style={styles.content}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#60D4B2',
        padding: 5,
        margin: 10,
        marginBottom:5,
        marginTop:5,
        width: 165,
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