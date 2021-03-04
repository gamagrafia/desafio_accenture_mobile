import React, { useEffect, useState } from 'react';
//import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoGama from '../images/logoGama.png';
import styled from 'styled-components/native'
import { api } from '../service/index';
import {IToken} from '../interfaces'
import  AsyncStorage  from '@react-native-community/async-storage';

export default function Home() {
    const route = useRoute()  

    const navigation = useNavigation(); 

  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')

 

  const [ storage, setStorage ] = useState<IToken>(():any => {
    let storageToken = () => localStorage.getItem('@tokenApp')
    return storageToken();
  })
  
 /*  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  */


  function handleLogin(){

    const postData= {
      usuario: login,
      senha: password
    }

    api.post(`login`, postData ).then(
      response => {
        localStorage.setItem('@tokenApp', response.data.token)
        navigation.navigate('dashboard')
      }
    )

  }

   
return (
    <>
    <Scroll>
        <Container>
            
            <LogoGama
                source={logoGama}
                height={60}
                width={231}
            />
            

          <Form>
          <Title> Seja bem vindo, informe seus dados para logar: </Title>
                
                <Input
                    placeholder='Digite seu usuário' 
                    value={ login }
                    onChangeText={(text) => setLogin(text)}
                    type="text"
                
                />              
                
                <InputPassword
                    placeholder='Digite sua senha'
                    value={ password }
                    onChangeText={(text) => setPassword(text)}
                    type="password"
                   
                />   

                <Icon.Button
                name="chevron-right"
                backgroundColor="#68DE5A"   
                
                onPress={handleLogin}
                >
                Continuar
                </Icon.Button>

               {/*  <RecoveryLink /* onPress={() => navigation.navigate('Recover')} >*/
             /*    <RecoveryLinkText>Esqueci minha senha > </RecoveryLinkText> */
              /*   </RecoveryLink> */

             /*    <RegisterLink /* onPress={() => navigation.navigate('Register')} *//* > 
                <RegisterLinkText>Criar uma nova conta</RegisterLinkText>
                </RegisterLink> */}

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
    margin-bottom: 80px;
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
    height: 480px;
`

const Title = styled.Text`
    width:250px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;  
    text-align: center;
    color: #8f8f8f;
`

const Input = styled.TextInput`    
    height: 60px;
    width: 80%;
    margin-top: 20px;
    border-bottom-color:#8f8f8f;
    border-bottom-width: 1px;    
`

const InputPassword = styled.TextInput`    
    height: 60px;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 40px;
    border-bottom-color:#8f8f8f;
    border-bottom-width: 1px;    
`

/* const RecoveryLink = styled.Link`    
    color: #8C52E5
` */


/* const TextButton = styled.Text`    
    color: #fff;
    font-size: 16px;
    margin-right: 18px;
    font-weight: bold;
` */


