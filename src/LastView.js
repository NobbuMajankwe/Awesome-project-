import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LastView(){
return(
<View style={styles.container}>
<Text style={styles.dummyText}> hie</Text>
</View>
)
}

const styles = StyleSheet.create({
container:{
flex: 1,
paddingTop:'40%',
backgroundColor:'black',
paddingHorizontal:'10%'
},
dummyText:{
color:'white',
fontWeight:'bold',
fontSize:20,
textAlign:'center'
}
})

