import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { stylesGlobal } from '../../theme/appTheme';
import { CardAnimals } from './components/CardAnimals';

//Data 


export interface Animals{
  id: number;
  pathImage: string;
  name: string;
  raza: string;
  sexo: string;
  tamaño: string;
  edad: string;
  caracteristicas: string;
}

const dataAnimales = [
  {
    id: 1,
    pathImage: 'https://reactjs.org/logo-og.png',
    name: '',
    raza: 'Raza1',
    sexo: 'Macho',
    tamaño: 'Mediano',
    edad: '2 años',
    caracteristicas: 'Descripción del animal 1.',
  },
  {
    id: 2,
    pathImage: 'https://reactjs.org/logo-og.png',
    name: '',
    raza: 'Siamese',
    sexo: 'Macho',
    tamaño: 'Pequeño',
    edad: '1.5 años',
    caracteristicas: 'Pelaje corto, social con otros gatos.',
  },
  {
    id: 3,
    pathImage: 'https://reactjs.org/logo-og.png',
    name: '',
    raza: 'Dálmata',
    sexo: 'Macho',
    tamaño: 'Grande',
    edad: '2.5 años',
    caracteristicas: 'Manchas distintivas, enérgico, entrenamiento recomendado.',
  },
  {
    id: 4,
    pathImage: 'https://reactjs.org/logo-og.png',
    name: '',
    raza: 'Mestizo',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '1 año',
    caracteristicas: 'Colorido, necesita interacción social.',
  },
  {
    id: 5,
    pathImage: 'https://reactjs.org/logo-og.png',
    name: '',
    raza: 'Mestizo',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '1 año',
    caracteristicas: 'Colorido, necesita interacción social.',
  },
  {
    id: 6,
    pathImage: 'https://reactjs.org/logo-og.png',
    name: '',
    raza: 'Mestizo',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '1 año',
    caracteristicas: 'Colorido, necesita interacción social.',
  },


];





export const HomeScreen = () => {
  return (
    <View>  
            <View style={styles.headerContainer}>
            <Image source={{uri: 'https://i.imgur.com/ItESdlC.jpeg'}} style={styles.logo} />
            <Text style={stylesGlobal.textInicio}>Rescatados en Adopción</Text>
            </View>


            <FlatList
                data={dataAnimales}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=><CardAnimals animals={item}/>}
                />

                

    </View>
  )
}


const styles=StyleSheet.create({
  headerContainer :{
  flexDirection: 'row'
  }, 
  logo:{
    alignSelf:'flex-start',
    width: 50,
    height: 50,
    marginBottom: 30,
    borderRadius: 20,
    margin:20,
  }
})