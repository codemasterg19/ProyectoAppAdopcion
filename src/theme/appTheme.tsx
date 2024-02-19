import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constantsColor";

export const stylesGlobal=StyleSheet.create({


    textDescription:{
        fontSize:15
    },
    containerForm:{
        marginVertical:10
    },


    //
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
         
      },

      logo: {
        alignSelf:'center',
        width: 150,
        height: 150,
        marginBottom: 30,
        borderRadius: 20,
    
      },

      header: {
        alignSelf:'center',
        fontSize: 24,
        marginBottom: 30,
      },

      buttonContainer: {
        alignSelf:'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        elevation:10,
      },

      textInicio:{
        
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#4CAF50',
        margin:20,
        padding:10,

        
    },
    inputTex: {
      alignSelf:'center',
      width: '90%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius:8
    },
    buttonText: {
      
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      elevation:5,
    },
    olvidoPassText: {
      alignSelf:'center',
      color: '#3498db',
      textDecorationLine: 'underline',
      margin:10
    },

  
    btInicio: {
        alignSelf: 'flex-end'
    },



    
})