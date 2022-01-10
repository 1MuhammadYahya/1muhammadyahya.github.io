const express = require('express');

const app = express();
app.use(express.static('/public'));
app.use(express.json());

const port = process.env.PORT || 8000;
const address = process.env.ADDRESS || '127.0.0.1';

app.listen(port, () => { console.log(`Server up at ${address}:${port}`); });