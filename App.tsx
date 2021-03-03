import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Deposito from './app/components/deposito'

export default class App extends React.Component {
  render() {
      return (
        <View  style={styles.container}>
            <Deposito/>
        </View>
      );
  }
    
}

const styles = StyleSheet.create({
    container: {
          flex:1,
          backgroundColor: 'rgba(251, 251, 251, 1)',
          


    },
});

