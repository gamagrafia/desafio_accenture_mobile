import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { Input } from 'react-native-elements';
import styled from 'styled-components/native';

import api from '../../src/services/api';

export default function RegiPass(){
    const route = useRoute()  
    const navigation = useNavigation(); 
    const [ userName, setUserName ] = useState('')
    const [ Email, setEmail ] = useState('')
    function handleCreateAccount(){
    const postData = {
      login: userName,
      Email: Email,
    }
    try {
      api.post(`usuarios`, postData ).then(
        response => { 
          if (response.status === 200){
            navigation.navigate('home')
          } else {
          }
         }
      )
    } catch (e) {
    }
}  
return (
    <>
        <Scroll>
            <Container>                  
              <Form>
              <Title> Esqueci Senha </Title>
                    <Input
                        placeholder='Nome de usuário ' 
                        value={ userName } 
                        onChangeText={(text) => setUserName(text)}
                    />                                 
                    <Input
                        placeholder='Digite seu email' 
                         value={ Email } 
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Button
                    name="chevron-right"
                    backgroundColor="#9B9B9B" 
                    size={35}  
                    onPress={handleCreateAccount}
                    >
                    Continuar
                    </Button>    
                    <Link  onPress={() => navigation.navigate('home')} > 
                      Voltar para Login
                    </Link>
                </Form>
            </Container>
        </Scroll>
    </>    
)}
    const Container = styled.View`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #8C52E5;
        width: 100%;
    `
    const Scroll = styled.ScrollView`
        width: 100%;
    `
    const LogoGama = styled.Image`
        margin-top: 80px;
        margin-bottom: 60px;
        height: 60px;
        width: 270px;
    `
    const Form = styled.View`
        background-color: #fff;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-radius: 8px;
        padding: 15px;
        width: 330px;
        height: 580px;
    `
    const Title = styled.Text`
        width:250px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 1px;  
        text-align: center;
        color: #8F8F8F;
    `
    const Link = styled.Text`
        width:250px;
        font-size: 10px;
        font-weight: bold;
        margin-top: 1px;  
        text-align: center;
        color: #8C52E5;
    `
    const InputPassword = styled.TextInput`    
        height: 60px;
        width: 80%;
        margin-top: 15px;
        margin-bottom: 10px;
        border-bottom-color:#8f8f8f;
        border-bottom-width: 1px;    
    `












