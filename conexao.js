
import mysql from 'mysql2/promise';

async function conexao(){
    // Configurações do banco de dados
    const dbConfig = {
        host: '',
        user: '',
        password: '',
        database: '',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };
    
    // Criando o pool
    const pool = mysql.createPool(dbConfig);
    return pool
}


// Exportação padrão no formato ES6
export {conexao};
