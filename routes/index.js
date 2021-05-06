var express = require('express');
var router = express.Router();

// router.all('*'), function(req, res, next) {
    
// }

const loadUsers = () => {
    fetch('/json/user.json')
    .then(response => {
        if (response.status !== 200) {
          throw Error("This is not 200")
        } else {
          return response.json() 
        }
      })
      .then(json => showUsers(json.data))
      .catch(err => console.log(err))

}


router.get('/', function(req, res, next) {
    res.redirect('/main.html')
});

router.get('/login', (req, res) => {
    res.redirect('/login.html')
});

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(`Username: ${username} Password: ${password}`);
})

module.exports = router;
