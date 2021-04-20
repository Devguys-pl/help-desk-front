function loginRoutes {
    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
      })
};



module.exports = loginRoutes;