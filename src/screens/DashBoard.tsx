import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import jwt from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import BottomMenu from '../components/BottomMenu';
import { DashProps, IUserDash } from '../interfaces';
import api from '../services/api';

 function  DashBoard() {
    const navigation = useNavigation();
    const [dataDash, setDataDash] = useState<DashProps>();

    const Token =  async () => await AsyncStorage.getItem("@tokenApp") || null;
    const TokenString = JSON.stringify(Token);
    console.log("TOKENARRAY:", TokenString)

    const TokenDecodedValue = () => {
        if(TokenString){
            const TokenArray = TokenString.split(' ');
            const TokenArr = TokenArray[1]
            const decode = jwt<IUserDash>(TokenArr);
            return decode.sub
        }else{
            console.log('err')
        }
    }


    
    function CloseDash() {
        AsyncStorage.clear();
        navigation.navigate('home')
    }
       
    

    useEffect(() => {


        api.get('/dashboard', {
            params: {
                inicio: '2021-03-03',
                fim: '2021-03-30',
                login: `${TokenDecodedValue()}`
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenString ,
            },
        }).then(
            response => {

                setDataDash(response.data);

            }
        );

    }, [dataDash])

    return (

        <Container>
            <Header>
                <TextHeader >Olá, User</TextHeader>
                <Ionicons onPress={CloseDash} color="#fff" name="person-circle-outline" size={40} />
            </Header>
            <ScrollView>
                <BoxMain>
                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTitle>Saldo da Conta</TextTitle>
                        </BoxtTitle>
                        {/* <TextValor>R${dataDash?.contaBanco.saldo}</TextValor> */}
                        <TextValor>R$5.000,00</TextValor>
                        <TextLancamentos>Lançamentos de débito: </TextLancamentos>
                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTitle>Planos da Conta</TextTitle>
                        </BoxtTitle>
                        <TextTipos>Tipo do Plano: Receita</TextTipos>
                        {/* <TextValor>R$:{dataDash?.contaBanco.lancamentos[0].valor}</TextValor> */}
                        <TextValor>R$:34,00</TextValor>

                        <Linha></Linha>
                        <TextTipos>Tipo do Plano: Despesas</TextTipos>
                        {/* <TextValorDespesa>R${dataDash?.contaCredito.lancamentos[0].valor}</TextValorDespesa> */}
                        <TextValorDespesa>R$155,00</TextValorDespesa>

                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTipos>Últimos lançamentos</TextTipos>

                        </BoxtTitle>
                        <LancamentosValores>
                            <LinhaVerical></LinhaVerical>
                            <TextValor >R$:1.000,00</TextValor>

                            {dataDash?.contaBanco.lancamentos.map((lanca) => (
                                <>

                                    {/* <TextValor key={lanca.id} >R$:{lanca.valor}</TextValor> */}
                                    <TextDate>{lanca.data}</TextDate>
                                    <LinhaVerical></LinhaVerical>
                                </>
                            ))}


                        </LancamentosValores>
                    </BoxContent>

                </BoxMain>
            </ScrollView>
            <BottomMenu />
        </Container>

    )
}

export default DashBoard;

const Container = styled.View`
    background-color: #8C52E5;
    height: 100%;
    width: 100%;
   
`
const Header = styled.View`
    height: 16%;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding: 70px 20px 0px 20px;
    
   
`
const TextHeader = styled.Text`
    color: #fff;
    font-size: 20px;
    text-transform: capitalize;
`

const BoxMain = styled.View`
    width: 100%;
    align-items:center;
`

const BoxContent = styled.View`
    background-color:#fff;
    width: 80%;
    margin-top: 10px;
    border-radius: 8px;
    padding: 20px;
    color:#34A6E7;
`


const BoxtTitle = styled.View`
    flex-direction: row;
    align-items:center;
    margin-bottom: 8px;

`

const TextTitle = styled.Text`
    font-size:20px;
    color:#9B9B9B;
    padding-left: 10px;
   
   

`
const TextValor = styled.Text`
    font-size: 25px;
    margin-bottom: 8px;
    color: #34A6E7;

`

const TextLancamentos = styled.Text`
    font-size: 15px;
    color:#9B9B9B;
    flex-wrap:wrap;
    margin-bottom:8px;
`
const TextTipos = styled.Text`
    font-size: 15px;
    color:#9B9B9B;
    flex-wrap:wrap;
    padding-left:10px;
    margin-bottom:8px;

 `

const Linha = styled.View`
    border-bottom-color: #9B9B9B;
    border-bottom-width: 1px;
    margin-bottom: 10px;
    margin-top:10px;
    
`
const TextValorDespesa = styled.Text`
    font-size: 25px;
    margin-bottom: 8px;
    color:#F45F5F;
`
const LancamentosValores = styled.View`
    justify-content:center;
    align-items:center;
`

const LinhaVerical = styled.View`
    border-right-color: #9B9B9B;
    border-right-width: 1px;
    margin-bottom: 10px;
    margin-top:10px;
    height:20px;
`
const TextDate = styled.Text`
    font-size:15px;
    color:#9B9B9B;
`