const express = require('express');
var cors = require('cors')
require('dotenv').config();
const { discordNotif } = require('./src/discordNotif.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

var corsOptions = {
    origin: 'https://*.kyng.be',
    optionsSuccessStatus: 200,
}

app.post('/new-client', cors(corsOptions), (req, res) => {
    discordNotif(req.body);
    res.send('Post successful');
});

app.listen((port), () => {
    console.log(`Welcome to Kyng API, listening on port ${port}`);
});