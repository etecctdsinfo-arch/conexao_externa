
import mysql from 'mysql2/promise';

async function conexao(){
    // Configurações do banco de dados
    const dbConfig = {
        host: 'mysql-eversonbacelli.alwaysdata.net',
        user: 'eversonbacelli',
        password: 'Ln5TM.JWLyHA*x8',
        database: 'eversonbacelli_projeto1',
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