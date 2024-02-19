import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Animals } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../../../commons/constantsColor'
import { ModalAdopcion } from './ModalAnimals';


interface Props{
    animals: Animals
}



export const CardAnimals= ({animals}:Props) => {

    // Hook que controla el modal 
    const [showModal, setShowModal] = useState(false);
    
  return (
    <View>
        <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
            <View style={styles.animalCard}>
                <Image
                    source={{
                        uri: animals.pathImage
                    }}
                    style={styles.animalImage}/>
                    <View style={styles.animalInfo}>
                        <Text style={styles.animalName}>{animals.name}</Text>
                        <Text style={styles.animalText}>{`Especie: ${animals.especie}`}</Text>
                        <Text style={styles.animalText}>{`Sexo: ${animals.sexo}`}</Text>
                        <Text style={styles.animalText}>{`Tamaño: ${animals.tamaño}`}</Text>
                        <Text style={styles.animalText}>{`Edad: ${animals.edad}`}</Text>
                        
                    </View>
                <View style={styles.icon}>
                    <Icon name={'pets'} size={30} color={'#85C1E9'}/>
                </View>
            </View>
        </TouchableOpacity>
      <ModalAdopcion animals={animals} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)}/>
    </View>
  )
}

const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderStyle:'solid',
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        marginBottom:15
    },
    image:{
        width:70,
        height:70
    },
    title:{
        fontWeight:'bold',
        color:'#000',
        fontSize:15
    },
    icon:{
        
        alignItems:'flex-end'
    },

    //

    animalCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 2,
      },
      animalImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
      },
      animalInfo: {
        flex: 1,
      },
      animalText: {
        fontSize: 14,
        marginBottom: 5,
      },
      animalName:{
        fontSize: 18,
        fontStyle: 'italic',
        


      }
})