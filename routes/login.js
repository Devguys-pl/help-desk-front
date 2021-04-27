const express = require('express');
let app = express()
const router = express.Router();

app.get('/login', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;