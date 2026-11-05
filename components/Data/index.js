import { View,Text } from "react-native";
import styles from "./styles";
import Card from '../Card';

export default function Data(props){
    return(
        <View style={styles.container}>
            <Text style={styles.subTitle}>{props.textSubTitle}</Text>
            <Text style={styles.gameParagraph}>{props.textParagrph}</Text>
             {props.gameDisc &&<Text style={styles.gameParagraph}>{props.gameDisc}</Text>}
            <View style={styles.boxCard}>
                <View style={styles.lineBoxCard}>
                    <View style={styles.frameCard}>
                        <Card cardImg={props.pImg}
                            pText={props.cardText1}
                            sText={props.cardText2}
                            frameColor={props.frameColor}
                            />                       
                    </View>
                    <View style={styles.frameCard}>
                       <Card cardImg={props.sImg}
                            pText={props.cardText3}
                            sText={props.cardText4}
                            frameColor={props.frameColor}
                            />   
                        
                    </View>
                </View>
                <View style={styles.lineBoxCard}>
                    <View style={styles.frameCard}>
                        <Card cardImg={props.tImg}
                            pText={props.cardText5}
                            sText={props.cardText6}
                            frameColor={props.frameColor}
                            />  
                    </View>
                    <View style={styles.frameCard}>
                        <Card cardImg={props.qImg}
                            pText={props.cardText7}
                            sText={props.cardText8}
                            frameColor={props.frameColor}
                            />  
                    </View>
                </View>
            </View>
        </View>
    );
}