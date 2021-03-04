import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';


export default function BottomMenu() {
    return (
        <FooterMenu>
            <FooterIconTextBox>
                <MaterialCommunityIcons name="bank-transfer" color="#fff" size={40} />
                <FooterText>Tranferir</FooterText>
            </FooterIconTextBox>
            <FooterIconTextBox>
                <FontAwesome name="dollar" size={40} color="#fff" />
                <FooterText>Lançamentos</FooterText>
            </FooterIconTextBox>
            <FooterIconTextBox>
                <MaterialCommunityIcons name="account-cash-outline" size={40} color="#fff" />
                <FooterText>Depositar</FooterText>
            </FooterIconTextBox>
            <FooterIconTextBox>
                <MaterialCommunityIcons color="#fff" name="currency-usd-circle-outline" size={40} />

                <FooterText>Planos</FooterText>
            </FooterIconTextBox>
        </FooterMenu>
    )
}

const FooterMenu = styled.View`
    background-color:#68DE5A;
    height:170px;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    flex-direction: row;
    width:100%;
    justify-content:space-evenly;
    align-items:flex-start;
    padding-top:10px;
`
const FooterIconTextBox = styled.View`
    justify-content:flex-end;
    align-items:center;
    width:90px;
    height:80px;
    
`

const FooterText = styled.Text`
    font-weight:500;
    color: #fff;
`