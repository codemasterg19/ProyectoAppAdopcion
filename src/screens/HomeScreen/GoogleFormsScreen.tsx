import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import { stylesGlobal } from '../../theme/appTheme';
import { PRIMARY_COLOR } from '../../commons/constantsColor';

export const GoogleFormsScreen = () => {

  const openGoogleForms = () => {
    // Reemplaza la URL del formulario de Google Forms con la URL de tu propio formulario
    const googleFormsUrl = 'https://forms.gle/jy7maa6iftgPZ29W8'; // URL de tu formulario

    // Abre la URL en el navegador web del dispositivo
    Linking.openURL(googleFormsUrl)
      .catch((err) => console.error('Error al abrir la URL', err));
  };

  return (
    <View>
            <View style={styles.headerContainer}>
            
            <Text style={styles.textInicio}>¿Un nuevo miembro en la familia?</Text>
            <Image source={{uri: 'https://img.mestizos.cl/upload/2022/03/17161D564C43476D17150F56514947771F141818504A477715-2000x1125.jpg'}} style={styles.logo} />
            <Text style={styles.descripForm}>“La Tenencia Responsable de animales se define como la condición bajo la cual el tutor de un perro o un gato acepta y se compromete a asumir una serie de deberes enfocados a satisfacer las necesidades físicas, psicológicas y ambientales del animal que adopta, así como la prevención de riesgos (potencial agresión, transmisión de enfermedades o daños a terceros) que este pueda generar a la comunidad o al medio ambiente, bajo el marco jurídico de la legislación pertinente”.</Text>
            </View>

                <TouchableOpacity style={styles.button} onPress={openGoogleForms}>
                <Text style={styles.buttonText}>Abrir formulario de Adopción</Text>
                </TouchableOpacity>
    </View>
  );
};



const styles=StyleSheet.create({
    headerContainer :{
        justifyContent:'center',
        alignItems:'center',
    }, 
    textInicio:{
        color:PRIMARY_COLOR,
        fontSize:30,
        alignSelf: 'center',
        flexWrap: 'wrap',
        padding:20

    },
    logo:{
      
      width: 300,
      height: 200,
      marginBottom: 30,
      borderRadius: 20,
      margin:20,
    },

    descripForm:{
        flexWrap: 'wrap',
        width: 300,
        fontSize: 15,
        padding:10
    },

    button: {
        alignSelf: 'center',
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin:20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },

  })
