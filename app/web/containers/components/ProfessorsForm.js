import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet,Button } from 'react-native-web';

export default class ProfessorsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom:'',
            correu:'',
            password:'',
            codiUdg:'',
        }

        this.onChange = this.onChange.bind(this)
    }
    render(){
        return(
        <View className="windowed-form" style={FormStyles.mainDiv}>
            <View style={FormStyles.inputGroup}>
                <Text style={FormStyles.title}>Nom</Text>
                <TextInput className="focusable" style={FormStyles.input} onChange={this.onChange} value={this.state.nom}></TextInput>
            </View>
            <View style={FormStyles.inputGroup}>
                <Text style={FormStyles.title}>Correu</Text>
                <TextInput className="focusable" style={FormStyles.input} onChange={this.onChange} value={this.state.correu}></TextInput>
            </View>
            <View style={FormStyles.inputGroup}>
                <Text style={FormStyles.title}>Password</Text>
                <TextInput className="focusable" style={FormStyles.input} onChange={this.onChange} value={this.state.password}
          secureTextEntry={true}></TextInput>
            </View>
            <View style={FormStyles.inputGroup}>
                <Text style={FormStyles.title}>Codi udg</Text>
                <TextInput className="focusable" style={FormStyles.input} onChange={this.onChange} value={this.state.codiUdg}></TextInput>
            </View>
            <Button title="Guardar" onPress={this.submit.bind(this)}>
                
            </Button>           
        </View>
        
        )
    }

    onChange(e) { 
        this.setState({[e.target.name]:e.target.value})      
    }

    submit(state){
        console.log(this.state);
    }
}

const FormStyles = StyleSheet.create({
  mainDiv: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  inputGroup:{
    marginTop:0,
    marginBottom:10,
  },
  title: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    lineHeight: '1.4rem',
    color:'#9a9a9a',
    fontFamily: 'Lato, Helvetica, sans-serif',
  },
  input:{
      fontSize:16,
      color:'#828181',
      borderStyle:'solid',
      borderWidth:1,
      borderColor:'#CDCDCD',
      padding:'0.2rem'
  }
})