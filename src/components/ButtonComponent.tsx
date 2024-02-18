import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/constantsColor'
import { stylesGlobal } from '../theme/appTheme';

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={stylesGlobal.buttonContainer}
        onPress={onPress}>
        <Text style={stylesGlobal.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

