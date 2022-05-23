const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

const {} = require('./models');

const PORT = 3001;
const app = express();

app.use (express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`listening on port http://localhost:${PORT}`);
    });
});