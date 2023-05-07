

// Novo recurso do ES2015

const pessoa = {
    nome: 'Roberto',
    idade: 23,
    endereco: {

        logradouro: 'Rua Nelson de Parijos',
        bairro: 'Bairro Novo',
        numero: 1825
        
    }
}



 // pelo destructurin da pra buscar alguns valores desejados da contante pessoa 
const {nome, idade} = pessoa
console.log('nome: ' + nome , '\nIdade: ' + idade)