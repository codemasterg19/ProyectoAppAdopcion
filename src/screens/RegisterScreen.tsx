import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { User } from '../navigator/StackNavigator'
import { getIdNewUser, hasErrorFormRegister, showSnackBar, verifyExistUser } from '../commons/authValidation'
import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'
import { useNavigation } from '@react-navigation/native'

export interface RegisterForm{
  cedula: string,
  email: string,
  password: string;
  hasError: boolean;
}

interface RegisterProps{
  usersLogin:User[];
  setUsersLogin:(user:User)=>void;
}

export const RegisterScreen = ({usersLogin, setUsersLogin}:RegisterProps) => {

  //hook navegación
  const navigation=useNavigation();

  //hook useState
  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<RegisterForm>({
    cedula:'',
    email:'',
    password:'',
    hasError:false
  });

  //Hook cambiar el contenido del input password
  const [hiddenPassword, setHiddenPassword] = useState(true);

  //Función que cambiará los valores del formulario
  const handlerChangeText=(name: string, value: string)=>{
    setForm(prevState =>({
        ...prevState,
        [name]:value
    }))
  }

  //Función para guardar los usuarios
  const handlerSaveUser=()=>{
    //Validar que los campos se encuentren llenos
    if(hasErrorFormRegister(form)){
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

    //Verificar si el usuario existe
    const existUser=verifyExistUser(usersLogin, form)
    if(existUser){
      showSnackBar('El usuario ya se encuentra registrado', ERROR_COLOR)
      return;
    }

    //Si el usuario no existe - nuevo objeto user
    const newUser:User={
      id: getIdNewUser(usersLogin),
      ...form
    }

    //agregar el nuevo usuario al arreglo usersLogin
    setUsersLogin(newUser)
    showSnackBar('Usuario registrado con éxito', PRIMARY_COLOR)
    
    console.log(form);
    //navegar al screen anterior - inicio de sesión
    navigation.goBack();
  }

  return (
    <View style={ stylesGlobal.container}>

            <Image source={{uri: 'https://i.imgur.com/ItESdlC.jpeg'}} style={stylesGlobal.logo} />
            <Text style={stylesGlobal.header}>Registrarse</Text>
            <View style={stylesGlobal.containerForm}>
              <InputComponent placeholder='Correo electrónico' name={'email'} onChangeText={handlerChangeText} hasError={form.hasError}/>
              <InputComponent placeholder='Cedula' name={'cedula'} onChangeText={handlerChangeText} hasError={form.hasError}/>
              <InputComponent
                placeholder='Contraseña'
                name={'password'}
                onChangeText={handlerChangeText}
                isPassword={hiddenPassword}
                hasIcon={true}
                accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                hasError={form.hasError}/>
            </View>
            <ButtonComponent title='Registrarse' onPress={handlerSaveUser}/>
            <TouchableOpacity
              onPress={()=>navigation.goBack()}>
                <Text style={stylesGlobal.olvidoPassText}>Ya tienes cuenta? Inicia sesión ahora</Text>
            </TouchableOpacity>

    </View>
  )
}


