

const instituicao = 'UFPA'

console.log(instituicao.charAt(2))  // pega a posicao 2 da string UFPA  ou seja a letra P

console.log(instituicao.charCodeAt(2))  // pega o caractere e mostra o valor dele na tabela ASCI

console.log(instituicao.indexOf('A')) // verifica se existe o caractere A e imprime a posição dele na string  

console.log(instituicao.substring(0))  // pega todos os valores da string da primeira ate a ultima posição

console.log(instituicao.substring(1, 3)) // pega somente os valores da posição 1 ate 2 sem incluir o 3

console.log('Instituição: '.concat(instituicao).concat(' $$$$'))


console.log('Instituição: ' + instituicao + '  $$$$$')


console.log('Maria, Roberto, Paulo, Marcia'.split(','))  // criar array


//  template string

const nome = 'Roberto'

const template = `
  
   Olá
   ${nome} !
`
console.log( template)