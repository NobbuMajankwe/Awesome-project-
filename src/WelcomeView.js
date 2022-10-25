import React, {useState} from 'react';
//import { useDispatch } from 'react-redux'
//import { usernameAdded } from './dataSlice'
import { activeUser } from './reduxFunc'
import { View, StyleSheet, TextInput, Button, Text} from 'react-native';

export default function WelcomeView({navigation}){
const [userName, setName] = useState('');
//const dispatch = useDispatch();
return(
<View style={styles.container}>
    <TextInput style={styles.textInputs} placeholder='Enter your name' onChangeText={n =>setName(n)} defaultValue={userName}/>

   <Button title='Next' onPress={() =>
    { userName ? (activeUser.dispatch({type:"update", item:{userName}}), navigation.navigate('Variations'))
    : alert('Please enter name')}}/>
</View>
)
}

const styles = StyleSheet.create({
container:{
flex:1,
paddingTop:50,
backgroundColor:'black',
paddingHorizontal:'10%'
},
textInputs:{
height:40,
backgroundColor:'white',
color:'black',
marginBottom:20,
}
})

