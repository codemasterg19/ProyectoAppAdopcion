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
  especie: string;
  sexo: string;
  tamaño: string;
  edad: string;
  caracteristicas: string;
}

const dataAnimales = [
  {
    id: 1,
    pathImage: 'https://i.imgur.com/Y13GOea.jpeg',
    name: 'Rocky',
    especie: 'Perro',
    sexo: 'Macho',
    tamaño: 'Grande',
    edad: '3 años',
    caracteristicas: 'Activo, amigable, pelaje corto y denso.',
  },
  {
    id: 2,
    pathImage: 'https://i.imgur.com/HNV0NV2.jpeg',
    name: 'Luna',
    especie: 'Gato',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '2.5 años',
    caracteristicas: 'Pelaje largo y sedoso, tranquila, requiere cepillado regular.',
  },

  {
    id: 3,
    pathImage: 'https://i.imgur.com/M5EoTjP.jpeg',
    name: 'Max',
    especie: 'Perro',
    sexo: 'Macho',
    tamaño: 'Grande',
    edad: '4 años',
    caracteristicas: 'Sociable, inteligente, excelente con niños.',
  },
  {
    id: 4,
    pathImage: 'https://i.imgur.com/BhaDJWr.jpeg',
    name: 'Simba',
    especie: 'Gato',
    sexo: 'Macho',
    tamaño: 'Pequeño',
    edad: '1.5 años',
    caracteristicas: 'Patrón de manchas exótico, enérgico, juguetón.',
  },
  {
    id: 5,
    pathImage: 'https://i.imgur.com/0M4AJEt.jpeg',
    name: 'Bella',
    especie: 'Gato',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '2 años',
    caracteristicas: 'Juguetona, le encanta dormir, cariñosa.',
  },
  {
    id:6,
    pathImage: 'https://i.imgur.com/BMXG728.jpeg',
    name: 'Oreo',
    especie: 'Gato',
    sexo: 'Macho',
    tamaño: 'Mediano',
    edad: '3.5 años',
    caracteristicas: 'Pelaje bicolor, curioso, se lleva bien con otros gatos.',
  },
  {
    id: 7,
    pathImage: 'https://i.imgur.com/b7DrP1e.jpeg',
    name: 'Daisy',
    especie: 'Gato',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '8 meses',
    caracteristicas: 'Energética, necesita mucho ejercicio, cariñosa.',
  },
  {
    id: 8,
    pathImage: 'https://i.imgur.com/sT7SUfF.jpeg',
    name: 'Charlie',
    especie: 'Gato',
    sexo: 'Macho',
    tamaño: 'Pequeño',
    edad: '4 mesess',
    caracteristicas: 'Pelo de varios colores, independiente pero cariñoso.',
  },


];





export const HomeScreen = () => {
  return (
    <View    >  
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