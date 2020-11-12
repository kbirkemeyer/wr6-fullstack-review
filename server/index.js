require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Hey! Get out of my swamp!')
}).catch( err => console.log(err));


app.listen(SERVER_PORT, ()=>console.log(`Welcome to port ${SERVER_PORT} such a perfect town`))