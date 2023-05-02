const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou confirgurando a primeira parte da rota 
const { v4: uuidv4} = require('uuid')

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta 

//aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Sinara Conceição',
        imagem: 'https://github.com/sinaraconceicao.png',
        minibio: 'desenvolverdora e instrutora'
    },
    {
        id: '2',
        nome: 'Inara Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    },
    {
        id: '3',
        nome: 'Nina Hora',
        imagem:'https://bit.ly/3FKpaz',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log ("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)