


const valores = [1,2,3,4,5,6,7,8,9]

console.log(valores[0], valores[3])

console.log(valores)

console.log(valores.length)


valores.push(10)    // adicionar no array
console.log(valores)

console.log(valores.pop()) //  pegar e retira o ultimo valor do array ou ultima posição

delete valores[0]
console.log(valores)  // deleta o valor da primeira posição


const programadores = ['Roberto', "Rosangela", 'Renato']

programadores.shift() //remove o primeiro elemento da lisra



programadores.unshift('Roberto Rodrigues')
console.log(programadores)