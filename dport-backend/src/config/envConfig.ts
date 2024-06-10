import dotenv from 'dotenv';

dotenv.config();

const {
    PREFIX,
    FRONT_END_URL,
    SERVER_PORT,
    SERVER_URL,
    PG_USER,
    PG_PORT,
    PG_DATABASE,
    PG_PASSWORD,
    PG_HOST,
} = process.env;

const prefix = PREFIX || '/api';
const frontEndUrl = FRONT_END_URL || '*';
const serverPort = SERVER_PORT || '3001';
const serverUrl = SERVER_URL || 'http://localhost';
const pgUser = PG_USER;
const pgPort = PG_PORT;
const pgDatabase = PG_DATABASE;
const pgPassword = PG_PASSWORD;
const pgHost = PG_HOST;

export {
    prefix,
    frontEndUrl,
    serverPort,
    serverUrl,
    pgUser,
    pgPort,
    pgDatabase,
    pgPassword,
    pgHost,
};
