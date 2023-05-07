

// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}


imprimirSoma(5, 7)

// função com retorno

function soma(a, b = 0) {

    return a + b
    
}


console.log(soma(2 + 2))


// aramazenando uma função em uma variavel


  const imprimirSoma2 = function(c, d){
      console.log(c + d)
  }

  imprimirSoma2( 7, 7)

  // aramazenando uma função arrow em uma variavel

  const soma2 = (e, f) => {
      return e + f
  }

  console.log(soma2(1 , 1))


  // retorno implicito da função arrow
  const subtracao = (g , h) => g - h
  console.log(subtracao( 5, 2)) 