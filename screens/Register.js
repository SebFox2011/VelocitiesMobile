import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import {Button, CheckBox,DatePicker} from 'native-base'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: false,
            chosenDate:new Date(),

        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate){
        this.setState({chosenDate:newDate})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.textHeader}>Mon compte</Text>
                <Text style={styles.textInscription}>Inscription</Text>
                <View style={{flexDirection:'row'}}>
                    <CheckBox style={styles.check} checked={this.state.checked1}
                              onPress={() => this.setState({checked1: !this.state.checked1,checked2:this.state.checked1})}
                              color='#e05a47'>
                    </CheckBox>
                    <Text style={styles.textCheck}>Madame</Text>
                    <CheckBox style={styles.check} checked={this.state.checked2}
                              onPress={() => this.setState({checked2: !this.state.checked2,checked1:this.state.checked2})}
                              color={'#e05a47'}>
                    </CheckBox>
                    <Text style={styles.textCheck}>Monsieur</Text>
                </View>
                <TextInput style={styles.textinput} placeholder='Identifiant'/>
                <TextInput style={styles.textinput} placeholder='Adresse mail'/>
                <TextInput style={styles.textinput} placeholder='Mot de passe'/>
                <Text style={styles.textinput} placeholder='Date de naissance'>{this.state.chosenDate.toDateString()}</Text>
                <DatePicker
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                    locale="fr"
                    minimumDate={new Date(1900,1,1) }
                    maximumDate={new Date()}
                    placeHolderText={"Date de naissance"}
                    textStyle={{color:"white"}}
                />
                <Button style={styles.button}
                        color='#ffffff'
                        onPress={() => {this.props.navigation.navigate('CardScreen')
                        }}>
                    <Text style={styles.textBouton}>S'inscrire</Text>
                </Button>
            </ScrollView>
        );
    }
}

Register.navigationOptions = {
    title: 'VeloCities',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#34aaa2',
    },
    textHeader: {
        fontSize: 50,
        color: '#ffffff',
        textAlign: 'center'
    },
    textInscription: {
        fontSize: 30,
        color: '#60D4B2',
        textAlign: 'center'
    },
    textBouton: {
        fontSize: 25,
        color: '#ffffff'
    },
    button: {
        backgroundColor: '#e05a47',
        fontSize: 35,
        width: 200
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        color: '#ffffff',
        fontSize: 20
    },
    check: {
        marginLeft: 5,
        marginRight: 5,
        height: 20,
        width: 20,
        color: '#ffffff',
    },
    textCheck:{
        marginLeft: 10,
        marginRight: 10,
        color: '#ffffff'
    }
});
