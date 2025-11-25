import express from 'express';
import { buscaContatoPorId, buscaTodosContatos } from './servicos/buscaServico.js';
import { deletaContato } from './servicos/deletaServico.js';

const app = new express();
const port = 3000;

app.get('/contatos', async (req, res) =>{
    const contatos = await buscaTodosContatos();
    res.status(200).json(contatos);
})

app.get('/contatos/:id', async (req, res) =>{
    const id = req.params.id;

    if(!isNaN(id)){
        const contato = await buscaContatoPorId(id);
        if(contato.length > 0){
            res.status(200).json(contato[0]);
        }else{
            res.status(404).json({'mensagem': 'Registro não encontrado!'});
        }
    }else{
        res. status(400).json({'mensagem': 'Requisiçao inválida!'});
    }    
})

app.delete('/contatos/:id', async (req, res) =>{
    const id = req.params.id;
    let resultado;

    if (id) {
        resultado = await deletaContato(id);
    } else {
        res.status(400).json({ 'mensagem': 'Requisição Inválida'});
    }

    if(resultado.affectedRows > 0){
        res.status(200).json({'mensagem':'Registro deletado com sucesso!'});
    }else{
        res.status(404).json({'mensagem':'Registro não encontrado!'});
    }
})

app.listen(port, () =>{
    let data = new Date();
    console.log(`Servidor iniciado na porta ${port} \nEm ${data}`)
})