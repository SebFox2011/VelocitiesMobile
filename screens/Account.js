import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {Button} from 'native-base'


class Account extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textHeader}>Mon compte</Text>
                <Text style={styles.textConnexion}>Connexion</Text>

                <TextInput style={styles.textinput} placeholder='Identifiant'/>
                <TextInput style={styles.textinput} placeholder='Mot de passe'/>
                <Button style={styles.button}
                        color='#ffffff'
                        onPress={()=> {}}>
                    <Text style={styles.textBouton}>Se connecter</Text>
                </Button>
                <Text style={styles.textBouton}>Mot de passe oublié ?</Text>
                <Text style={styles.textBouton}
                      onPress={() => {this.props.navigation.navigate('Register')}}
                >S'inscrire</Text>
            </View>
        );
    }
}

export default Account;

Account.navigationOptions = {
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
    textConnexion: {
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
    }
});
