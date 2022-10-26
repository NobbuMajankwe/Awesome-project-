import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider'
//import { useSelector } from 'react-redux'
import { activeUser } from './reduxFunc'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function ButtonView({navigation}){
const [svalue,setSValue] = useState(0);
//const name = useSelector(state => state.name.value)
const data = activeUser.getState();

const AppButtons = ({onPress, backgroundColour, colour})=>(
<TouchableOpacity
onPress={onPress}
style={{backgroundColor: backgroundColour,
 width:"100%",
 height:40,
 borderRadius:8,
 marginBottom:5,
 justifyContent: 'center',
 }}>
 <Text style={{justifyContent: 'center', color: colour, fontSize:13, textAlign: 'center', }}>
 Press me
 </Text>
 </TouchableOpacity>
);

const CustomThumb = () => (
    <View style={styles.componentThumbStyles}>
       <Text>
        <Icon name='diamond-stone' size={25} color='white'/>
       </Text>
    </View>
);

return(
<View style={styles.container}>
    <Text style={styles.topText}>{ data.username }</Text>
    <Text style={styles.headText}> 4 variations of a button</Text>
    <AppButtons
        onPress={() => navigation.navigate('LastView')}
        backgroundColour='transparent'
        colour='#2196F3'/>

    <AppButtons
        onPress={() => navigation.navigate('LastView')}
        backgroundColour='#3A3B3C'
        colour='#2196F3'/>

    <AppButtons
        onPress={() => navigation.navigate('LastView')}
    backgroundColour='#2196F3'
    colour='white'/>
    <Slider animateTransitions renderThumbComponent={CustomThumb} trackStyle={styles.track} value={svalue} onValueChange={value=> setSValue({value})}/>
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
topText:{
color:'white',
paddingTop:'40%',
fontWeight:'bold',
fontSize:14,
textAlign:'right'
},
headText:{
color:'yellow',
fontWeight:'bold',
fontSize:16,
textAlign:'center'
},
buttons:{
width:"100%",
height:40,
borderRadius:8,
marginBottom:5,
textAlign: 'center'
},
    componentThumbStyles : {
        alignItems: 'center',
        backgroundColor: '#2196F3',
        height: 40,
        justifyContent: 'center',
        width: 45,
        borderRadius: 8,
    },
    track: {
            borderRadius: 8,
            height: 40,
            backgroundColor:'black',
            width:'100%',
            borderColor: '#2196F3',
            borderWidth:1
     },
})

