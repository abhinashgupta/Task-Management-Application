import express from 'express';
import Connection from './database/db.js';

import bodyParser from "body-parser";

import cors from 'cors'
import Routes from './routes/route.js';

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URI =process.env.MONGODB_URI || `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wjj51ur.mongodb.net/?retryWrites=true&w=majority`;

Connection(MONGODB_URI);
app.listen(PORT , () =>console.log(`hello ${PORT}`))