import { View,Text,Image } from "react-native";
import styles from "./styles";
export default function top(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={props.img} style={styles.img}/>
            <Text style={styles.paragraph}>{props.primeText}</Text>
            <Text style={styles.paragraph}>{props.secText}</Text>
            <Text style={styles.Paragraph}>{props.text3}</Text>
        </View>
    );
}