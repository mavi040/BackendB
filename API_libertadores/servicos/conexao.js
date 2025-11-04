import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'libertadoresmv',
    password: 'Mv@260482@',
    database: 'libertadoresmv'
})

export default pool;