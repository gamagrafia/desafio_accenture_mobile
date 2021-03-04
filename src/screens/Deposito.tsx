import AsyncStorage from '@react-native-async-storage/async-storage';
import { withFormik } from 'formik';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import api from '../services/api';

const Form = (props: any) => (
  
  <Container>
    
    
    <Formulario>    
    <TextInputForm 
      placeholder='Digite o ID de sua conta'
      value={props.values.conta}
      onChangeText={text => props.setFieldValue('conta', text)}
    />
    <TextInputForm
      placeholder='Em qual conta quer inserir saldo?'
      value={props.values.contaDestino}
      onChangeText={text => props.setFieldValue('contaDestino', text)}
    />
    <TextInputForm
      placeholder='Digite a data do depósito'
      value={props.values.data}
      onChangeText={text => props.setFieldValue('data', text)}
    />
    <TextInputForm
      placeholder='Descrição do Depósito'
      value={props.values.descricao}
      onChangeText={text => props.setFieldValue('descricao', text)}
    />
    <TextInputForm
      placeholder='Qual seu usuário'
      value={props.values.login}
      onChangeText={text => props.setFieldValue('login', text)}
    />
    <TextInputForm
      placeholder='Qual o ID de seu plano de conta?'
      value={props.values.planoConta}
      onChangeText={text => props.setFieldValue('planoConta', text)}
    />
    <TextInputForm
      placeholder='R$ Valor a ser depositado'
      value={props.values.valor}
      onChangeText={text => props.setFieldValue('valor', text)}
    />
     <Icon.Button
      name="chevron-right"
      onPress={props.handleSubmit}  
      backgroundColor="#68DE5A"
      size={30}   
      >
      Fazer Depósito
      </Icon.Button>
    </Formulario>
  </Container>
);
export default withFormik({
  mapPropsToValues: () => ({ conta: '', contaDestino: '' , data: '',descricao:'', login:'',planoConta:'',valor:''}),
  handleSubmit: (values) => {
    console.log(values);
   const token= AsyncStorage.getItem('@tokenApp')
   try {
        api
          .post("/lancamentos", values, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": token,
            },
          })
          .then((response) => {
            console.log(response.status)
            
        
        })
          .catch((e) => { 
            console.log(e)
          })
      } catch (e) {
        console.log(e)
       }
    
 }
})(Form);
export const Container = styled.View`
display: flex;
justify-content: center;
align-items: center;
background-color:#E5E5E5;
height:100%;
width: 100%;
`
export const Formulario = styled.View`
justify-content: center;
align-items: stretch;
display:flex;
flex-direction: column;
width: 80%;
`
export const TextInputForm = styled.TextInput`
margin-bottom:20px;
font-size: 20px;
height:30px;
border-bottom-color:#8f8f8f;
border-bottom-width: 1px;    
`