import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

function DashBoard() {


    return (

        <Container>
            <Header>
                <TextHeader ></TextHeader>
                <Ionicons color="#fff" name="person-circle-outline" size={40} />
            </Header>
            <ScrollView>
                <BoxMain>
                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTitle>Saldo da Conta</TextTitle>
                        </BoxtTitle>
                        <TextValor></TextValor>
                        <TextLancamentos>Lançamentos de débito: </TextLancamentos>
                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTitle>Planos da Conta</TextTitle>
                        </BoxtTitle>
                        <TextTipos>Tipo do Plano: Receita</TextTipos>
                        <TextValor></TextValor>

                        <Linha></Linha>
                        <TextTipos>Tipo do Plano: Despesas</TextTipos>
                        <TextValorDespesa></TextValorDespesa>

                    </BoxContent>

                    <BoxContent>
                        <BoxtTitle>
                            <MaterialCommunityIcons color="#9B9B9B" name="currency-usd-circle-outline" size={30} />
                            <TextTipos>Últimos lançamentos</TextTipos>

                        </BoxtTitle>
                        <LancamentosValores>


                            <LinhaVerical ></LinhaVerical>
                            <TextValor></TextValor>
                            <TextDate></TextDate>
                            <LinhaVerical></LinhaVerical>



                        </LancamentosValores>
                    </BoxContent>

                </BoxMain>
            </ScrollView>
            
        </Container>

    )
}

export default DashBoard;

const Container = styled.View`

   
`
const Header = styled.View`
  
    
   
`
const TextHeader = styled.Text`
   
`

const BoxMain = styled.View`
    
`

const BoxContent = styled.View`
  
`


const BoxtTitle = styled.View`
    

`

const TextTitle = styled.Text`
  
   

`
const TextValor = styled.Text`
   

`

const TextLancamentos = styled.Text`
   

`
const TextTipos = styled.Text`
      
 `

const Linha = styled.View`
 
    
`
const TextValorDespesa = styled.Text`
     

`
const LancamentosValores = styled.View`
  
`

const LinhaVerical = styled.View`
   
`
const TextDate = styled.Text`
    
`