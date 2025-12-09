import pool from "./conexao.js";

export async function atualizaContato(id, nome, telefone, email) {
    const conexao = await pool.getConnection();

    const sql = 'UPDATE contato SET nome = ?, telefone = ?, email = ? WHERE id = ?';
    const [resposta] = await conexao.execute(sql, [nome, telefone, email, id]);
    console.log(resposta);
    conexao.release();
    return resposta;
}

export async function atualizaContatoParcial(id, campos) {
    const conexao = await pool.getConnection();

    //Construção dinâmica da query SQL
    const colunas = Object.keys(campos).map(item =>  `${item} = ?`).join(", "); 
    const valores = Object.values(campos);
    valores.push(id);

    const sql = `UPDATE contato SET ${colunas} WHERE id = ?`;
    //update contato set nome = ?, telefone = ? where id = ?;
    const [resposta] = await conexao.execute(sql, valores);
    //update contato set nome = "Daniel", telefone = "(69)99302-5284" where id = 8;
    console.log(resposta);
    conexao.release();
    return resposta;    
}