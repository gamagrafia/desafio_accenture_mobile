import React from 'react';
import { StyleSheet, View, TextInput, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withFormik } from 'formik';
import styled from 'styled-components/native';
import api from '../../../services/api'



const Form = (props: any) => (
  

  <Container>
    
    
    <Formulario>    
    <TextInputForm 
      placeholder='Digite o ID de sua conta'
      value={props.values.conta}
      onChangeText={text => props.setFieldValue('conta', text)}
    />
    <TextInputForm
      placeholder='Em qual conta quer inserir Saldo?'
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
     <ButtonConfirmar
      onPress={props.handleSubmit}
      title="Realizar transferência"
    />
    </Formulario>
  </Container>
);


export default withFormik({
  mapPropsToValues: () => ({ conta: '', contaDestino: '' , data: '',descricao:'', login:'',planoConta:'',valor:''}),
  handleSubmit: (values) => {
    console.log(values);

   try {
        api
          .post("/lancamentos", values, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYW1hZ3JhZmlhIiwiaWRVc3VhcmlvIjo4ODIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MTQ4MTY1MzEsImV4cCI6MTYxNDgyMDEzMX0.k6sjREfHxjrFlyNEVoJfIxAqLNX3NpzpjkJpAGZO_-CxBz1LAfbr0BuLujE1bDCjhAkPIKtyQ9uMhl2Acd_VBw",
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
align-items: center;
display:flex;
flex-direction: column;
width: 80%;
`
export const TextInputForm = styled.TextInput`
/* background-color:#7a7d77; */
margin-bottom:20px;
font-size: 20px;
height:30px;
border-bottom-color:#8f8f8f;
border-bottom-width: 1px;    

`

export const ButtonConfirmar = styled.Button`



`

   





