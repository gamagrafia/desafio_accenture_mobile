import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation} from '@react-navigation/native';
import BottomMenu from '../components/BottomMenu';
import { DashProps } from '../interfaces';
import api from '../services/api';
import decode from 'jwt-decode';

import  AsyncStorage  from '@react-native-community/async-storage';

function DashBoard() {
    const navigation = useNavigation();

    const [dataDash, setDataDash] = useState<DashProps>();

    


    const TokenStorage = () => AsyncStorage.getItem('@tokenApp');

    const TokenDecodedValue = () => {
        if (TokenStorage) {
            const TokenArr = TokenStorage.split(' ')
            const TokenDecode = TokenArr[1]
            const decoded = decode<IUserDash>(TokenDecode);
            return decoded.sub;
        } else {
            alert('err')
        }
    }

    useEffect(() => {

        console.log(TokenDecodedValue());

        api.get('/dashboard', {
            params: {
                inicio: '2021-03-03',
                fim: '2021-03-30',
                login: `${TokenDecode()}`
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenStorage,
            },
        }).then(
            response => {

                setDataDash(response.data);

            }
        );

    }, [])

    return (

        <Container>
            <Header>
                <TextHeader >Olá, {user}</TextHeader>
                <Ionicons color="#fff" name="person-circle-outline" size={40} />
            </Header>
            <ScrollView>
                <BoxMain>
                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTitle>Saldo da Conta</TextTitle>
                        </BoxtTitle>
                        <TextValor>R${dataDash?.contaBanco.saldo}</TextValor>
                        <TextLancamentos>Lançamentos de débito: </TextLancamentos>
                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTitle>Planos da Conta</TextTitle>
                        </BoxtTitle>
                        <TextTipos>Tipo do Plano: Receita</TextTipos>
                        <TextValor>R$:{dataDash?.contaBanco.lancamentos[0].valor}</TextValor>

                        <Linha></Linha>
                        <TextTipos>Tipo do Plano: Despesas</TextTipos>
                        <TextValorDespesa>R${dataDash?.contaCredito.lancamentos[0].valor}</TextValorDespesa>

                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTipos>Últimos lançamentos</TextTipos>

                        </BoxtTitle>
                        <LancamentosValores>
                                    <LinhaVerical></LinhaVerical>
                            {dataDash?.contaBanco.lancamentos.map((lanca, index) => (
                                <>

                                    <TextValor  key={index} >R$:{lanca.valor}</TextValor>
                                    <TextDate>{lanca.data}</TextDate>
                                    <LinhaVerical></LinhaVerical>
                                </>
                            ))}


                        </LancamentosValores>
                    </BoxContent>

                </BoxMain>
            </ScrollView>
            <BottomMenu/>
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