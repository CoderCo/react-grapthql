const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hi! mister Robot'));
app.listen(4000, () => console.log('запущено приложение на порту 4000'))