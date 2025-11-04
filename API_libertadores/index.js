import express from 'express';
import pool from './servicos/conexao.js'
import { retornaCampeonatos, retornaCampeonatosID } from './servicos/retornaCampeonatos_servico.js';
const app = express();


const port = 9000;

    
    app.get('/campeonatos', async (req, res) => {
        let campeonatos;
        const ano = parseInt(req.query.ano);
        
        const anoInvalido = typeof ano === 'undefined' || ano === '';
        
        if(anoInvalido){
            campeonatos = await retornaCampeonatos();
        } else if(!anoInvalido){
            if (!isNaN(ano)) {
                campeonatos = await retornaCampeonatosAno(ano);
        } else {
            res.status(400).json({ mensagem: "Requisicao Invalida: 'ano' deve ser um numero." });
        } 
        
        if(campeonatos.length > 0){
            res.json(campeonatos);
        }else{
            res.status(404). json({mensagem: "Nenhum campeonato encontrado!"})
        }
    const campeonatos = await retornaCampeonatos();
    res.json(campeonatos);
        }
});    

app.get('/campeonatos/:id', async (req, res) => {
    let campeonato;
    const id = parseInt(req.params.id);
    
    if(!isNaN(id)){
        campeonato = await retornaCampeonatosID(id);
    }else{
        res.status(400).json({mensagem: "Requisição inválida!"})
    }
    
    if(campeonato.length > 0){
        res.json(campeonato);
    }else{
        res.status(404).json({mensagem: "Nenhum campeonato encontrado!"})
    }
});

    app.listen(port, async() => {
    const data = new Date();
    console.log(`Servidor iniciado na porta ${port} em: ${data}`);


    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();
});