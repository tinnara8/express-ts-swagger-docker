import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes';
// import todosRouter from './routers/TodosRouter';
// import pool from './dbconfig/dbconnector';
let corsOptions = {
    origin: 'http://localhost:3000',
};
class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        // this.dbConnect();
    }

    private config() {
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    // private dbConnect() {
    //     pool.connect(function (err, client, done) {
    //         if (err) throw new Error(err);
    //         console.log('Connected');
    //       }); 
    // }

    private routerConfig() {
        // this.app.use('/todos', todosRouter);
        RegisterRoutes(this.app);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;