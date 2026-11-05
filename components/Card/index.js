import { View,Image,Text } from "react-native";
import styles from "./styles";

export default function Card(props){
    return(
        <View style={[styles.container,{backgroundColor:props.frameColor}]}>
            <Image style={{width:80, height:80,tintColor:'white'}} source={props.cardImg}/>
            <Text style={styles.paragraph}>{props.pText}</Text>
            <Text style={styles.paragraph}>{props.sText}</Text>
        </View>
    );
}