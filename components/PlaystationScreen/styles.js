import { StyleSheet } from "react-native";

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white',
            
        },
        alingContainer:{
            alignItems:'center',
            gap:20,
        },
        top:{
            width:'90%',
            flex:1,
            backgroundColor:'white', 
            marginVertical:15,           
        },
        bode:{
            width:'90%',
            flex:1,
            backgroundColor:'white',
        },
        footer:{
            width:'90%',
            flex:1,
            backgroundColor:'white',
            marginBottom:10
            
            
        },
        footerSubTitle:{
            fontSize:16,
            fontWeight:'bold',
            textAlign:'center',
            marginVertical:10,
        },
        paragrph:{
            textAlign:'justify',
        },
    });

export default styles;