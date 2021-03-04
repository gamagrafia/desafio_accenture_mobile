import React from 'react';
import { StyleSheet, View, TextInput, Button, Dimensions, Text } from 'react-native';
import { withFormik } from 'formik';
import api from '../../services/api'





const Form = (props: any) => (

  <View style={styles.container}>
    
    <TextInput 
      placeholder='De qual de suas contas você quer tirar o dinheiro?'
      style={styles.inputForm}
      value={props.values.conta}
      onChangeText={text => props.setFieldValue('conta', text)}
    />
    <TextInput
      placeholder='Para qual conta quer enviar o dinheiro?'
      style={styles.inputForm}
      value={props.values.contaDestino}
      onChangeText={text => props.setFieldValue('contaDestino', text)}
    />
    <TextInput
      placeholder='Digite a data da transferência'
      style={styles.inputForm}
      value={props.values.data}
      onChangeText={text => props.setFieldValue('data', text)}
    />
    <TextInput
      placeholder='Descrição da transferência'
      style={styles.inputForm}
      value={props.values.descricao}
      onChangeText={text => props.setFieldValue('descricao', text)}
    />
    <TextInput
      placeholder='Qual seu usuário'
      style={styles.inputForm}
      value={props.values.login}
      onChangeText={text => props.setFieldValue('login', text)}
    />
    <TextInput
      placeholder='Qual o ID de seu plano de conta?'
      style={styles.inputForm}
      value={props.values.planoConta}
      onChangeText={text => props.setFieldValue('planoConta', text)}
    />
    <TextInput
      placeholder='R$ Valor a ser transferido'
      style={styles.inputForm}
      value={props.values.valor}
      onChangeText={text => props.setFieldValue('valor', text)}
    />
     <Button
      onPress={props.handleSubmit}
      title="Transferir"
    />
  </View>
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
              "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYW1hZ3JhZmlhIiwiaWRVc3VhcmlvIjo4ODIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MTQ4MjgzMDksImV4cCI6MTYxNDgzMTkwOX0.2xpLC_GQHV9IKj1k8Ly41rkikK9Y6BMzfbR3SMFgu2FgFKYNYdCbk5OYmZhxQaph1GUzWZQBUDj7FCIPdXY0jQ",
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
    // aqui chamada api
 }
})(Form);


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#E2E2E2',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    
    
  },
  inputForm: {
    width: Dimensions.get('window').width - 50,
    height: 40,
    borderBottomWidth:0,
    backgroundColor: '#fff',
    margin: 10
  }
})