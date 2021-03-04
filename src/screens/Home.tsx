import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import logoGama from '../images/logoGama.png';
import api from '../services/api';

//import { Feather } from '@expo/vector-icons'
export default function Home() {
   
  const navigation = useNavigation(); 

  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')


//   const [ storage, setStorage ] = useState<IToken>(():any => {
//     let storageToken = () => AsyncStorage.getItem('@tokenApp')
//     return storageToken();
//   }) 
  
//   useEffect(() => {
//     !!storage ? navigation.navigate('dashboard') : AsyncStorage.clear()
//   }, [storage]) 


//  /*  const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('@storage_Key', value)
//     } catch (e) {
//       // saving error
//     }
//   }
//   */


  async function handleLogin() {

    const postData= {
      usuario: login,
      senha: password
    }

    api.post('login', postData ).then(
      response => {
        // console.log(response.data.token)      
        AsyncStorage.setItem('@tokenApp', response.data.token)
        AsyncStorage.setItem('@login', `@{login}`)
        
        
       // AsyncStorage.setItem('login', login)
       navigation.navigate('dashboard')
       alert('logado')
      }
    )
        console.log(AsyncStorage.getItem('login'))
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
                    value ={ login }
                    onChangeText={(text) => setLogin(text)}
                    
                
                />              
                
                <InputPassword
                    placeholder='Digite sua senha'
                    value={ password }
                    onChangeText={(text) => setPassword(text)}
                    
                   
                />   

                <Icon.Button
                name="chevron-right"
                backgroundColor="#68DE5A" 
                size={35}  
                
                onPress={handleLogin}
                >
                Continuar
                </Icon.Button>

                <Link  onPress={() => navigation.navigate('regpass')} >
                  Esqueci minha senha  
                 </Link> 

                <Link  onPress={() => navigation.navigate('register')} > 
                  Criar uma nova conta 
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

const Link = styled.Text`
    width:250px;
    font-size: 10px;
    font-weight: bold;
    margin-top: 15px;  
    text-align: center;
    color: #8C52E5;
`




