
import  { conexao } from './conexao.js'; // Importante incluir a extensão .js

async function listarProdutos(){
    try {
        let conn = await conexao()
        const query = "SELECT * FROM tbl_produtos;"
      
        // Destructuring das linhas (rows)
        const [rows] = await conn.query(query);
      
        return rows;
      } catch (error) {
        console.error('Erro ao conectar ou consultar o banco:', error.message);
      }
}

export {listarProdutos}