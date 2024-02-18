import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animals } from '../HomeScreen';

interface Props{
    animals: Animals;
    isVisible: boolean;
    changeVisible:()=>void;
}

export const ModalAdopcion = ({animals, isVisible, changeVisible}:Props) => {
    //Hook para la dimensión de mi pantalla
    const {width}=useWindowDimensions();
    //hook para el valor de la cantidad 
    const [quantity, setQuantity] = useState(1)
    //funcion para trabajar la cantidad 
    const handlerChangeQunatity=(value: number)=>{
        setQuantity
    }
  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={styles.root}>
            <View style={{width: width*0.80,
                        ...styles.content}}>
                <View style={styles.headerModal}>
                    <Text> Adopcion</Text>      
                    <View style={styles.iconClose}>     
                        <Icon name={'cancel'} size={20} color={PRIMARY_COLOR} onPress={changeVisible}/>
                    </View>
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
    image:{
        alignItems:'center'
    },
    quantityContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
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
    cantidadText:{
        fontSize:20,
        color:'black',
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

    }

})