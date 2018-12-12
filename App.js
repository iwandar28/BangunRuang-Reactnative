import React from 'react';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';



export default class App extends React.Component {
constructor(){
  super()
  this.state = {
    header: "Hitung Volume Bangun Ruang",
    angka1: 0,
    angka2: 0,
    angka3: 0,
    hasil: 0
  }
}

hitung =() => {
  const { angka1,angka2,angka3} =this.state
  this.setState({hasil: angka1 * angka2 * angka3})
}

  render() {
    return (
      <View style={styles.container}>

      <Text
      style = {styles.headerBox}
      >{this.state.header} </Text>
      
      
      <TextInput 
      style={styles.inputBox}
      value={ String(this.state.angka1)} 
      onChangeText={(text) => this.setState({angka1:Number(text)})}/>
      
      <TextInput 
      style={styles.inputBox}
      value={ String(this.state.angka2)} 
      onChangeText={(text) => this.setState({angka2:Number(text)})}/>

      <TextInput 
      style={styles.inputBox}
      value={ String(this.state.angka3)} 
      onChangeText={(text) => this.setState({angka3:Number(text)})}/>

      <Button syle ={styles.ButtonBox} title ="Hitung" onPress={this.hitung} />
      <Text style={styles.hasilBox}> {this.state.hasil} </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  headerBox:{
    fontSize:20,
    margin: 10
    
  },
  inputBox:{
    width: '70%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    margin: 10
  },
  hasilBox:{
    fontSize:100,
    margin:20
  },
  ButtonBox:{
    margin:7,
    padding: 7
  }
  

});
