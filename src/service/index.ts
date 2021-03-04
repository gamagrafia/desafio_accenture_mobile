import axios from 'axios';

export const loginSend = axios.create({
    baseURL: 'https://accenture-java-desafio.herokuapp.com'
    
})