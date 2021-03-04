import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecuperarSenha from '../src/screen/RecuperarSenha';
import Sucess from '../src/screen/sucess';
import SenhaRecuperar from '../src/screen/SenhaRecuperar';

const { Navigator, Screen } = createStackNavigator()

export default function Route(){
    return(
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false, cardStyle:{ backgroundColor: '#8C52E5'}}}
            > 
            <Screen
             name="Register" component={Sucess} 
            />
            <Screen
               name="RecuperarSenha" component={RecuperarSenha} 
            />
            <Screen
               name="SenhaRecuperar" component={SenhaRecuperar} 
            />          
            </Navigator>
        </NavigationContainer>
    )
}