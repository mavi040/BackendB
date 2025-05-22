//01

let apartamento = {
    quarto: 2,
    tipo: 'apartamento',
    endereço: 'Avenida Principal, 456 - Centro',
    andar:7,   
}

console.log(apartamento);
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º da ${apartamento.endereço}`);

//02

let produto_embalado = {
    nome: 'LapTop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500.00

}

console.log(`O produto ${produto_embalado.nome}, da categoria ${produto_embalado.categoria}, pesando ${produto_embalado.peso} kg, está a venda por ${produto_embalado.preco.
toLocaleString('pt-BR', {style: "currency", currency: 'BRL'})}.`);

//03

class imovel {
    constructor(quartos,tipo,endereço){
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereço = endereço;
    }
}

let casa = new imovel();
casa.quartos = 3;
casa.tipo = 'sobrando';
casa.endereço = 'rua Mavi Bla Bla, nº0508';
console.log(casa);
console.log(`'tipo do imovel: ${casa.tipo}'\nquartos: ${casa.quartos} \nendereço: ${casa.endereço}`)
console.log(casa.exibirinformacoes());

let apt = new imovel(2,'Apartamento', 'Rua Amélia nº 1010, bairro centro');
console.log(apt.exibirinformacoes());

//04
import entrada from "readline-sync";
let sexo = entrada.question("Informe seu sexo: ")
switch (sexo) {
    case "M":
        console.log("Masculino")
        break;
    case "F":
        console.log("Feminino")
        default:
            console.log("Ta errado")
        break;
}