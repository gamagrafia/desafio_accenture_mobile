import React, { useEffect, useState } from 'react';
//import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoGama from '../images/logoGama.png';
import styled from 'styled-components/native';
import { api } from '../service/index';

export default function Register(){
  const route = useRoute()  

  const navigation = useNavigation(); 

  const [ cpf, setCpf ] = useState('')
  const [ name, setName ] = useState('')
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPass, setConfirmPass ] = useState('')

  function handleCreateAccount(){

  const postData = {
    cpf,
    nome: name,
    login: userName,
    senha: password
  }
  
  if ( password !== confirmPass ) {
    /* toast.error('Sua senha está incorreta!')  */
    return;
  }

  try {
    api.post(`usuarios`, postData ).then(
      response => { 
        if (response.status === 200){
          navigation.navigate('login')
        } else {
          /* toast.error('Algo deu errado, tente novamente em alguns minutos.') */
        }
       }
    )
  } catch (e) {
    /* toast.error('algo deu errado') */
  }

  navigation.navigate('accountCreated')
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
          <Title> Peça sua conta e cartão de crédito do Gama Bank </Title>
                
                <Input
                    placeholder='Digite seu cpf' 
                    type="text"  value={ cpf } 
                    onChangeText={(text) => setCpf(text)}
                    
                />  

                <Input
                    placeholder='Escolha um nome de usuário ' 
                    type="text" value={ userName } 
                    onChangeText={(text) => setUserName(text)}
                />             
                
                <Input
                    placeholder='Nome completo ' 
                    type="text" value={ name } 
                    onChangeText={(text) => setName(text)}
                />  

                <Input
                    placeholder='Digite sua senha ' 
                    type="password" value={ password } 
                    onChangeText={(text) => setPassword(text)}
                />

                <InputPassword
                    placeholder='Confirme sua senha'
                    type="password" value={ confirmPass } 
                    onChangeText={(text) => setConfirmPass(text)}
                   
                />   

                <Icon.Button
                name="chevron-right"
                backgroundColor="#9B9B9B"   
                
                onPress={handleCreateAccount}
                >
                Continuar
                </Icon.Button>

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
    color: #8f8f8f;
`

const Link = styled.Text`
    width:250px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 1px;  
    text-align: center;
    color: #8C52E5;
`

const Input = styled.TextInput`    
    height: 50px;
    width: 80%;
    margin-top: 15px;
    border-bottom-color:#8f8f8f;
    border-bottom-width: 1px;    
`

const InputPassword = styled.TextInput`    
    height: 60px;
    width: 80%;
    margin-top: 15px;
    margin-bottom: 10px;
    border-bottom-color:#8f8f8f;
    border-bottom-width: 1px;    
`
