// Server
import express from 'express';
import router from './routes';

// Middleware
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as bodyParser from 'body-parser';

// Config
import { frontEndUrl, serverPort, serverUrl, prefix } from './config';

// Init Express
const app = express();

// Middleware Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((_: any, res: { header: (arg0: string, arg1: string) => void }, next: () => void) => {
    res.header('Content-Type', 'application/json;charset=UTF-8');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const allowedOrigins = [frontEndUrl];

app.use(
    cors({
        origin(origin: any, callback: any) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg =
                    'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    }),
);

const requestLogger = (req: any, _: any, next: any) => {
    const now = new Date();
    const formatted_date =
        now.getFullYear() +
        '-' +
        (now.getMonth() + 1) +
        '-' +
        now.getDate() +
        ' ' +
        now.getHours() +
        ':' +
        now.getMinutes() +
        ':' +
        now.getSeconds();

    const { method, url, status } = req;

    const log = `[${formatted_date}] ${method}:${url} ${status}`;
    console.log(log);
    next();
};

app.use(requestLogger);

app.use(router);

// start the Express server
app.listen(serverPort, () => {
    console.log(`server started at ${serverUrl}:${serverPort}`);
});
