import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/Home';
import Register from './screens/Register'

const { Navigator, Screen } = createStackNavigator()

export default function Route(){
    return(
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false, cardStyle:{ backgroundColor: '#8C52E5'}}}
            >

                <Screen
                    name="home"
                    component={Home}    
                />
                
                <Screen
                    name="register"
                    component={Register}
                />
                
            </Navigator>
        </NavigationContainer>
    )
}