var express = require('express');
var router = express.Router();

function loginRoutes (app) {

  let isLogged = false;
    app.get('/login', function (req, res,) {
        if (isLogged === false) {
          res.send('Przykro mi ale nie jestes zalogowany');
        } else {
          res.send('ok, masz dostep dalej');
        }
      })
};



module.exports = loginRoutes;