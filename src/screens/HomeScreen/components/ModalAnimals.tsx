import React, { useState } from 'react'
import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animals } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';

interface Props{
    animals: Animals;
    isVisible: boolean;
    changeVisible:()=>void;
}

export const ModalAdopcion = ({animals, isVisible, changeVisible}:Props) => {
    //Hook para la dimensión de mi pantalla
    const {width}=useWindowDimensions();





    const handlePostular = () => {
        
        changeVisible();
        // alerta
        Alert.alert(
            'Postulación Exitosa',
            `Se ha postulado en la adopción de ${animals.name} exitosamente.`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        
                        console.log('Usuario presionó OK en la alerta');
                        
                        
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const handlePatrocinar = () => {
        
        changeVisible();
        // Alerta
        Alert.alert(
            
            `Para ayudar a  ${animals.name} puedes donar en las siguiente cuenta.`,
            'PRODUBANCO Cuenta de Ahorros No. XXXXXXXXXX',

            [
                {
                    text: 'OK',
                    onPress: () => {
                       
                        console.log('Usuario presionó OK en la alerta');
                        
                        
                    },
                },
            ],
            { cancelable: false }
        );
    };
      
  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={styles.root}>
            <View style={{width: width*0.90,
                        ...styles.content}}>
                <View style={styles.headerModal}>
                    <Text style={styles.title}> {animals.name}</Text>  
                       
                    <View style={styles.iconClose}>     
                        <Icon name={'cancel'} size={20} color={PRIMARY_COLOR} onPress={changeVisible}/>
                    </View>

                </View> 

                <View style={styles.caracteCont}>

                <Image source={{uri: animals.pathImage }} style={styles.animalImage} />
                    
                    <Text style={styles.title}>Caracteristicas</Text>
                    <Text >{animals.caracteristicas}</Text>
                    

                </View>

                <View style={styles.buttonContAdp}>

                    <TouchableOpacity style={styles.buttonContainer} onPress={handlePostular}> 
                        <Text style={stylesGlobal.buttonText}>Postular</Text>
                    </TouchableOpacity>

                    

                    <TouchableOpacity style={styles.buttonContainer} onPress={handlePatrocinar}>
                        <Text style={stylesGlobal.buttonText}>Patrocinar</Text>
                    </TouchableOpacity>

                </View>
                

                                           

            </View>
        </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    content:{
        padding:20,
        backgroundColor:SECONDARY_COLOR,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerModal:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        borderStyle:'solid',
        padding:10
    },
    iconClose:{
        flex:1,
        alignItems:'flex-end'
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        color:'#000'
    },


    buttonQuantity:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:PRIMARY_COLOR,
        borderRadius:30,
        margin:15
    }, 
    buttonQuantityText:{
        color:SECONDARY_COLOR,
        fontSize:20,
        fontWeight:'bold'
    },

    buttonCar:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical:10,
        alignItems:'center',
        borderRadius:5,
        marginTop:15
    },
    buttonCarText:{
        color:'#fff',
        fontWeight: 'bold',

    },

    animalImage: {
        width: 150,
        height: 200,
        borderRadius: 40,
        marginRight: 10,
        marginTop:10,
        marginBottom: 20,
      },




      caracteCont:{
        alignContent:'center',
        alignItems: 'center',
        margin: 10,
      },

      buttonContAdp:{
        flexDirection: 'row'

      },
      buttonContainer: {
        flex:1,
        alignSelf:'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        elevation:10,
        margin:15,
      },



})