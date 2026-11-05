import { StyleSheet } from "react-native";

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            gap:10,
        },
        subTitle:{
            fontSize:16,
            fontWeight:'bold',
            textAlign:'center',
            marginVertical:10,
        },
        gameParagraph:{
            textAlign:'justify',
            marginVertical:10,
        },
        boxCard:{
            width:'100%',
            height:400, 
            gap:5,   
            alignItems:'center',
            justifyContent:'center'
        },
        lineBoxCard:{
            width:'100%',
            height:190,
            backgroundColor:'white',
            flexDirection:'row',
            gap:5,
            justifyContent:'center',
            alignItems:'center'
        },
        frameCard:{
            width:'49%',
            height:'90%',
            
        },
    }
);

export default styles;