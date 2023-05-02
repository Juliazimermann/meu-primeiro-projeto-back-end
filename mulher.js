const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou confirgurando a primeira parte da rota 
const { v4: uuidv4} = require('uuid')

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta 



//GET
function mostraMulher(request, response) {
 response.json({
    nome: 'Júlia Zimermann',
    imagem: 'https://avatars.githubusercontent.com/u/84805952?s=96&v=4',
    minibio: 'Devsenvolvedora em formação'
 })
}

//POST 
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulher)) //configurei rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota post /mulheres
app.listen(porta, mostraPorta) //ouvindo a porta