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
position: 'absolute',
top:'40%',
},
dummyText:{
color:'red',
fontWeight:'bold',
fontSize:'30',
textAlign:'center'
}
})

