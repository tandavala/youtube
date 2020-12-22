const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Ola mundo backend dev remote');
});

app.listen(3000, () => console.log('runing...'));