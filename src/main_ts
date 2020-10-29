import * as express from 'express';
import { RegisterRoutes } from './routes/routes';

const bodyParser = require('body-parser');
const cors = require('cors');
// import * as fs from 'fs';  // here
// import * as https from 'https'; // here

// const privateKey = fs.readFileSync('cert/cert.key');
// const certificate = fs.readFileSync('cert/cert.crt');
// const credentials = {key: privateKey, cert: certificate};

const app = express();
let corsOptions = {
    origin: 'http://localhost:3000',
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
const port = process.env.PORT || 3000;
// const port = 3000;8080

RegisterRoutes(app);  // routes here

// const httpsServer = https.createServer(credentials, app);

app.listen(port, () => console.log(`Server started listening to port ${port}`));
// httpsServer.listen(port, () => console.log(`Server started listening to port ${port}`));
