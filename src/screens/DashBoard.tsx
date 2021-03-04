import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { DashProps } from '../interfaces';
import api from '../services/api';

function DashBoard() {
    const [dataDash, setDataDash] = useState<DashProps>();

    const user = "teste";
    const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImlkVXN1YXJpbyI6ODU1LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjE0ODI0MjUzLCJleHAiOjE2MTQ4Mjc4NTN9.IGLCIwgtl24pyu62zk4tvGB6XsuMBpF564N8T6KVIMx4BWRva8JqF_8_xIZtyuVsZ1NZy688Tt2yenImO9-p0w"
    useEffect(() => {


        api.get('/dashboard', {
            params: {
                inicio: '2021-03-03',
                fim: '2021-03-30',
                login: `${user}`
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
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
                        <TextValorDespesa>{dataDash?.contaCredito.lancamentos[0].valor}</TextValorDespesa>

                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTipos>Últimos lançamentos</TextTipos>

                        </BoxtTitle>
                        <LancamentosValores>
                                    <LinhaVerical></LinhaVerical>
                            {dataDash?.contaBanco.lancamentos.map((lanca) => (
                                <>

                                    <TextValor  key={lanca.id} >R$:{lanca.valor}</TextValor>
                                    <TextDate>{lanca.data}</TextDate>
                                    <LinhaVerical></LinhaVerical>
                                </>
                            ))}


                        </LancamentosValores>
                    </BoxContent>

                </BoxMain>
            </ScrollView>

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