import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'agenda2b',
    password: 'agenda123@',
    database: 'agendab'
})

export default pool;