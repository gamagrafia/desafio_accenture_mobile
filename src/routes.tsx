import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomMenu from './components/BottomMenu';
import DashBoard from './screens/DashBoard';
import Deposito from './screens/Deposito';
import Home from './screens/Home';
import RegiPass from './screens/RegiPass';
import Register from './screens/Register';
import Transferencia from './screens/Transferencia';


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
                <Screen
                    name="regpass"
                    component={RegiPass}
                />
                

                <Screen
                    name="dashboard"
                    component={DashBoard}
                />
                <Screen
                    name="deposito"
                    component={Deposito}
                 />
                <Screen 
                    name="transferencia"
                    component={Transferencia}
                />
                <Screen
                    name="bottomMenu"
                    component={BottomMenu}
                />



                
                
            </Navigator>
        </NavigationContainer>
    )
}