import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Deposito from './screens/deposito';
import Tranferencia from './screens/transferencia';


export default class App extends React.Component {
  render() {
      return (
        <View >
            <Deposito/>
            {/* <Tranferencia/> */}
            {/* <ListaPlanos/> */}
        </View>
      );
  }
    
}

// const styles = StyleSheet.create({
//     container: {
//       paddingTop:100,
//       backgroundColor: '#E2E2E2',
//       height: Dimensions.get('window').height,
//       width:Dimensions.get('window').width,
//       justifyContent:'center',
//       alignItems:'stretch',
      

//     },
// });

