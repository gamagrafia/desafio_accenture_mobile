import React, { useEffect, useState } from 'react';
import { View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components'
 
import { api } from '../../service';

import { GetUnit, IAllUnits } from '../../interfaces'

export default function Sucess() {
    const route = useRoute()
    const params = route.params as GetUnit
    
    const [ unit, setUnit ] = useState<IAllUnits>()

    useEffect(() => { 
            api.get(`find?id=${params.id}`).then(
            response => {setUnit(response.data)}         )
     }, [params.id])

    const navigation = useNavigation();

    function handlePushContact(){
        navigation.navigate('sucess')
    }

    return (
          <View>
            <Container>
              <Image
                source={{ uri:'../../images/gama-logo.png'}}    //src/images/gama-logo.pgn
                height={60}
                width={231}
                 />
            </Container>
            <Image
                source={{ uri:'../../images/Vector.png'}}    //src/images/gama-logo.pgn
                height={50}
                width={200}
                 />
              <Text>Conta Criada com Sucesso!</Text>             
            )
        </View>
   )}

const Container = styled.view`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8C52E5;
    width: 100%;
    
`
const LogoGama = styled.image`
    margin-top: 80px;
    margin-bottom: 80px;
    height: 60px;
    width: 270px;
`

const Title = styled.text`
    width:250px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;  
    text-align: center;
    color: #ffff;
`
const Link = styled.text`
    width:250px;
    font-size: 10px;
    font-weight: bold;
    margin-top: 15px;  
    text-align: center;
    color: #8C52E5;
`
