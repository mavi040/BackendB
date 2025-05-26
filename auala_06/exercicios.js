//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida, 
// imprima a tabuada desse número usando um loop while.
import rl from "readline-sync";

let pergunta = rl.questionInt("Digite um número: ")
let cont = 1
while(cont <= 10) {
    console.log(`${pergunta} * ${cont} = ${pergunta*cont}`)
    cont++;
}


//02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
//alunos.
//O Programa deverá:
//Ler o número de alunos da turma;
//Ler as notas dos 4 bimestres de cada aluno;
//Calcular e imprimir a média do aluno;
//Calcular e imprimir a média da turma.

let numaluno = rl.questionInt("Informe o número de alunos: ");
let somanota = 0;
let contadoaluno = 1;
let somamedia = 0;
while(contadoaluno <= numaluno) {
console.log(`Aluno ${contadoaluno}`);


let contadorbim = 1;
while (contadorbim <= 4){
let nota = rl.questionInt(`Informe a nota do ${contadorbim}° bimestre para o aluno ${contadoaluno}: `);
somanota = somanota + nota;
contadorbim++;
}
let divisao = somanota / 4;
somamedia += divisao;

console.log(`Média do aluno ${contadoaluno}: ${divisao.toFixed(2)}`);
contadoaluno++;
}

let mediageralturma = somamedia / numaluno;
console.log(`Media geral da turma: ${mediageralturma.toFixed(2)} `);

//03. a) Escreva um programa que simule um jogo de adivinhação
//onde o usuário deve adivinhar um número aleatório entre 1 e 100.
//O programa deve fornecer dicas sobre se o número digitado é
//maior ou menor que o número aleatório. O jogo deve continuar até
//que o usuário adivinhe corretamente


const numAleatorio = Math.floor(Math.random()*100)+1;

let Tentativa 

do{
    Tentativa = rl.questionInt("Adivinhe o número (entre 1 e 100):")
    if (Tentativa === numAleatorio){
        console.log("Parabéns!! Você acertou 🔥🔥🔥");
    }else if(Tentativa < numAleatorio){
        console.log("Tente um número maior");
    }else{
        console.log("Tente o número menor");
    }
}while (Tentativa !==numAleatorio);   

//02. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
//valor de imposto de renda a ser pago.
//Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
//Salário <= R$ 2.100,00 = isento
//Salário <= R$ 2.800,00 = 7,5%
//Salário <= R$ 3.750,00 = 15%
//Salário <= R$ 4.660,00 = 22.5%
//Salário > R$ 4.660,00 = 27.5%

for (let i = 1; i <=10; i++){
    let nome= rl.question(`Informe o nome da ${1}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);
    
    let ir = 0;
    if (salario <= 2100){
        ir = 0;
    } else if (salario <= 2800){
        ir = salario * 0.075;
    } else if (salario <= 3750){
        ir = salario * 0.15;
    } else if (salario <= 4600){
        ir = salario * 0.225;
    } else {
        ir = salario * 0.275;
    console.log(`\n--- Importo de Renda devido---`);
    console.log(`Nome: ${nome} \n Imposto de Renda: R$ ${ir.toFixed(2)}\n`);
    }
}

//1. Escreva um programa que itere sobre as propriedades
//de um objeto e imprima suas chaves e valores.

//for in
const pessoa = {
    nome: "Carlos Eduardo dos Santos",
    dataDeNascimento: "20/02/2002",
    cpf: "98765422244",
    sexo: "M"
}

for (const key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}

const cores = ["Preto", "Rosa", "Banco", "azul"];
for (const elemento of cores) {

    valores += elemento + ",";

}
console.log(elemento);