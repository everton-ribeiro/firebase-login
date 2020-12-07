const express = require('express');
const firebase = require('firebase');
require('firebase/auth');
const app = express()
const credential = { 
    apiKey: ""
}
firebase.initializeApp(credential);
const port = process.env.PORT || 3001;
app.use(express.json())

app.get('/', async (request, response) => {
  return response.status(200).json({result:'deu certo'})
})


/**
 * @Todo
 * 
 * 1 - Validação do request (vazio, email, quantidade de carateres senha)
 * 2 - Filtrar o retorno do firebase
 * 3 - Teste unitários
 * 4 - Separar as rotas
 * 5 - add eslint para padronizar o estilo de codigo
 */

app.post('/api/login', async (request, response) => {
    const email= request.body.email;
    const pass = request.body.pass;

    firebase.auth().tenantId = 'tenant1-wtob9';
    
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function(result) {
        return response.status(200).json({result:result})
    }).catch(function(error) {
        return response.status(401).json({result:error})
    });
  //response.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})