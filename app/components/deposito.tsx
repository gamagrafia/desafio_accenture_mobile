import React, { useState } from 'react';
import { StyleSheet, 
         Text, 
         View,
         TextInput,
         TouchableOpacity,
         SafeAreaView ,
         Button,
         Alert 
 } from 'react-native';
 import { Formik } from 'formik';







// type FormData = {
//   conta: number,
//   contaDestino: string,
//   data:string,
//   descricao:string,
//   login:string,
//   planoConta:number,
//   valor:number,
// }

      

const Deposito: React.FC = () => {

    <Formik
     initialValues={{ conta: '',contaDestino: '', data:'', descricao:'',login:'',planoConta:'',valor:''}}

     onSubmit={values => console.log(values)}
   >


     {({ handleChange, handleBlur, handleSubmit, values }) => (
         

       <View>
        
         <TextInput
           onChangeText={handleChange('conta')}
           onBlur={handleBlur('conta')}
           value={values.conta}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
  



  return (


    <>
    </>
    // <form>
        
    //   <label>Id de sua conta principal</label>
    //   <TextInput value= {conta}  />
    //   <label>Id de sua conta onde quer fazer o Deposito</label>
    //   <TextInput value= {contaDestino}  />
    //   <label>Digite a data do deposito</label>
    //   <TextInput value= {data}  />
    //   <label>Digite seu uservname</label>
    //   <TextInput value= {login}  />
    //   <label>Digite o ID do plano de conta a ser vinculado ao Deposito</label>
    //   <TextInput value= {planoConta}  />
    //   <label>Valor a ser Depositado</label>
    //   <TextInput value= {valor}  />
    // </form>
  );
}

export default Deposito;
