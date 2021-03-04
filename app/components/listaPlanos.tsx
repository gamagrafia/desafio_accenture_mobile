import React, {useEffect, useState} from 'react';
import { StyleSheet, View, TextInput, Button, Dimensions, Text } from 'react-native';
import { withFormik } from 'formik';
import api from '../../services/api'





const ListaPlanos: React.FC = () => {

    const [planos, setPlanos] = useState([{ id: '', descricao: '', login: '', tipoMovimento: '', padrao: true}]);



    useEffect(() => {
        
    
        api.get(`/lancamentos/planos-conta?login=gamagrafia`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYW1hZ3JhZmlhIiwiaWRVc3VhcmlvIjo4ODIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MTQ4MjgzMDksImV4cCI6MTYxNDgzMTkwOX0.2xpLC_GQHV9IKj1k8Ly41rkikK9Y6BMzfbR3SMFgu2FgFKYNYdCbk5OYmZhxQaph1GUzWZQBUDj7FCIPdXY0jQ",
          },
        })
          .then((res) => {
    
            const planos = (res.data);
            setPlanos(planos);
            console.log(planos);
    
          });
    
    
    
      }, []);




  return (
    <View>
    <Text> Seus planos de Conta</Text>
    <Text> 
    {planos.map(plano =>
        
        <Text key={plano.id}> {plano.descricao} do tipo : {plano.tipoMovimento} com o ID:{plano.id}</Text>
      )}
    </Text>
    
    <View>

      {planos.map(plano =>
        
        <Text key={plano.id}> {plano.descricao} do tipo : {plano.tipoMovimento} com o ID:{plano.id}</Text>
      )}

    </View>
    </View>
    
  );
}

export default ListaPlanos;

