let variavel = 10
console.log('conta', 10 + ++variavel);
console.log('variavel', variavel);



/*if (preco < 40) {
resultado = "Livro é barato.";
} else {
  resultado = "Livro não é barato.";
} */

const preco = 30;
let resultado = preco>40 ? "Livro é caro" : "Livro é barato" ;

console.log(resultado)

let meuObjeto = {
  propriedade1 : "um texto",
  propriedade2: 40
  
}


console.log(meuObjeto.propriedade2)

let sobreMim = {
  nome: "Myn",
  idade : 20
}

console.log(sobreMim.idade)


function minhaFuncao(entrada){
  return entrada + 1;
}

const outrafuncao = function(entrada){
  return entrada + 22;
}

const setinha = (entrada) => {
  return entrada + 33;
}

const setinha2= (entrada) => entrada + 34
