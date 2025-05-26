//01. Crie uma função que receba uma string como
//parâmetro e retorne a mesma string com todas as letras
//em caixa alta.

import rl from 'readline-sync';

let frase = rl.question ("Informe o texto para ser convertido:");
console.log (Maiusculas(frase));

//Declaração de função
function Maiusculas(texto){
    return texto.toUpperCase();
}

//Expressão de função
const cxAlta = function (texto){
    return texto.toUpperCase();
}

//Função de seta
const tdMaiusculas = (texto) => texto.toUpperCase();
console.log(tdMaiusculas(frase));