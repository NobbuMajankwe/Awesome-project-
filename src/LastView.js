import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { activeUser } from './reduxFunc'

export default function LastView(){
const data = activeUser.getState();
return(
<View style={styles.container}>
    <Text style={styles.topText}>AccountHolder: {data.userName }</Text>
</View>
)
}

const styles = StyleSheet.create({
container:{
flex: 1,
paddingTop:'5%',
backgroundColor:'black',
paddingHorizontal:'10%'
},
topText:{
color:'white',
paddingBottom:'40%',
fontWeight:'bold',
fontSize:14,
textAlign:'right'
}
})

