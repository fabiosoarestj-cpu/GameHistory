import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        gap:10,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
    },
    img:{
        width:'100%',
        height:300,
        resizeMode:'center'

    },
    paragraph:{
        textAlign:'justify',
        marginVertical:10,
    },
});

export default styles;