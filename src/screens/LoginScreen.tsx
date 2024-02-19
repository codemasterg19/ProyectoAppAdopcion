import React, { useState } from 'react'
import { StatusBar, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'

import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Snackbar from 'react-native-snackbar';
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../theme/appTheme';
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { hasErrorFormLogin, showSnackBar, verifyExistUser } from '../commons/authValidation';

export interface LoginForm{
    cedula: string,
    password: string;
    hasError: boolean;
}


interface LoginProps{
  users:User[]
}

export const LoginScreen = ({users}:LoginProps) => {

  //Hook de navegación
  const navigation=useNavigation();

  //hook useState
  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<LoginForm>({
    cedula:'',
    password:'',
    hasError:false
  });

  //Hook cambiar el contenido del input password
  const [hiddenPassword, setHiddenPassword] = useState(true);

  //Hook numero
  //const [numero, setNumero] = useState(0);

  //Función que cambiará los valores del formulario
  const handlerChangeText=(name: string, value: string)=>{
    //console.log(name); //clave - propiedad
    //console.log(value);  //valor de clave
    setForm(prevState =>({
        ...prevState,
        [name]:value
    }))
  }

  //Función que envia los datos del formulario
  const handlerSendInfo=()=>{
    //Validar que los campos se encuentren llenos
    if(hasErrorFormLogin(form)){
      setForm(prevState=>({
        ...prevState,
          hasError:true
      }))
      return;
    }

    setForm(prevState=>({
      ...prevState,
        hasError:false
    }))

  //Llamar función para verificar si el usuario existe
  const existUser= verifyExistUser(users, form)
    if(!existUser || existUser.password != form.password){
      showSnackBar("Usuario y/o contraseña incorrecta!", ERROR_COLOR)
      return;
    }
    //console.log(form)
    navigation.dispatch(CommonActions.navigate({name:'HomeScreen'}))
  }

  return (
    <View style={stylesGlobal.container}>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>

        <Image source={{uri: 'https://i.imgur.com/ItESdlC.jpeg'}} style={stylesGlobal.logo} />
        <Text style={stylesGlobal.header}>Inicio de Sesión</Text>
            
            
                <InputComponent placeholder='Cédula' name='cedula' onChangeText={handlerChangeText} hasError={form.hasError}/>
                <InputComponent 
                  placeholder='Contraseña' 
                  name='password' 
                  onChangeText={handlerChangeText}
                  isPassword={hiddenPassword}
                  hasIcon={true}
                  accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                  hasError={form.hasError}/>
            
    
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
            <TouchableOpacity
              onPress={()=>navigation.dispatch(CommonActions.navigate({name:'RegisterScreen'}))}>
              <Text style={stylesGlobal.olvidoPassText}>No tienes cuenta? Regístrate ahora</Text>
            </TouchableOpacity>

    </View>
  )
}
