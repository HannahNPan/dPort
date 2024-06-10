// connect to database
import pg from 'pg';
import { pgUser, pgPort, pgDatabase, pgPassword, pgHost } from '../config/envConfig';

const pgConfig = {
    user: pgUser,
    database: pgDatabase,
    password: pgPassword,
    host: pgHost,
    port: Number(pgPort),
};
const pool = new pg.Pool(pgConfig);

const query = async (text: string, params: any) => {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
};

export { query };
