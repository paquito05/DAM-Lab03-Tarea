import React, { Component } from 'react';
import {
  StyleSheet,Text,View,} from 'react-native';
  
import AgeValidator from './app/components/ageValidator';
import MyList from './app/components/mylist/MyList';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Ingrese su edad</Text>
        </View>
          <AgeValidator/>
          <MyList/>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:10,
  },

  text: {
    alignItems: 'center',
    padding: 10,
  },
});


