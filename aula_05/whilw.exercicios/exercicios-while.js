//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida, 
// imprima a tabuada desse número usando um loop while.
import rl from "readline-sync"

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


