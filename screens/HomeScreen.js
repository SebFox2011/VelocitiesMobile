import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {TuileItem} from '../components/TuileItem';
import {TuileSuggest} from "../components/TuileSuggest";
import {TuileProche} from "../components/TuileProche";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flexDirection:'column',alignItems:'stretch',flex:1,backgroundColor: '#34aaa2'}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TuileItem title={'Où louer / Déposer 1 vélo'}/>
                    <TuileItem title={'Mon compte'}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TuileItem title={'Changer la ville'}/>
                    <TuileItem title={'Stations favorites'}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TuileItem title={'Les stations de Rennes'}/>
                    <TuileSuggest/>
                </View>
                <TuileProche/>
            </View>
        );
    }
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  title: 'VeloCities',
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
