import React, {Component} from "react";
import { View, TextInput, Text, StyleSheet} from "react-native"

class AgeValidator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
        };
    }
    onChanged(text){
        let Texto = '';
        let numeros = '0123456789';

        for (var i=0; i < text.length; i++){
            if (numeros.indexOf(text[i]) > -1) {
                Texto = Texto + text[i];
            }
            else{
                alert ("Ingrese valores numericos")
            }
        }

        if (text >= 18) {
            this.setState({textValue: 'Es mayor de edad'});
        } else {
            this.setState({textValue: 'Es menor de edad'});
        }
    };
    render(){
        return (
            <View>
              <TextInput 
                style={{height: 40, borderColor:'gray', borderWidth: 1}}
                placeholder="Ingrese los valores"
                keyboardType='numeric'
                onChangeText={text => this.onChanged(text)}
              />
              <Text>{this.state.textValue}</Text>
            </View>
        );
    }
}

export default AgeValidator;