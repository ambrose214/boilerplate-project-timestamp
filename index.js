const express = require('express');
const app = new express();
app.get('/', (req, res) => res.sendfile('views/index.html'));
app.listen(3000);