let valor = 13.141516;
let text = "Meu primeiro projeto JavaScript";
let ativo = true;

console.log(valor.toFixed(2)); //Arredonda o valor para duas casas decimais
console.log("Tipo:"+ typeof valor); //Retorna o tipo de variável
console.log(text.toUpperCase()); //Converte o texto para maiúsculas
console.log("Tipo:" + typeof text); //Retorna o tipo de variável
console.log(ativo.toString()); //Converte para texto
console.log("Tipo:" + typeof ativo); //Retorna o tipo de variável

let estados = ["São Paulo", "MInas Gerais", "Rondônia", "Acre"];
let marcasCarros = [];
marcasCarros.push("Toyota");
console.log(estados[2]);
console.log("Tamanho: "+ estados.length);//Concanentação
console.log(marcasCarros[0]);
console.log("Total letras:" +  marcasCarros[0].length);
console.log(`Estado: ${estados[1]}`);//interpolação

let usúario; // VAriável não definida
console.log(usuario);
//console.log(usuario.length); Error

let idade = 0;
console.log(idade+1); // NaN - Not a number

let nula = null;
//console.log(nula.length);
console.log(nula + 1);

const aula = "JavaScript"; // Definindo uma constante
console.log(aula);


