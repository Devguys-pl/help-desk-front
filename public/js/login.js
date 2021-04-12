let users = [{
        username: "Artur",
        password: "artur"
    },
    {
        username: "Dawid",
        password: "dawid"
    }
]
let logged = false;

let info = document.getElementById('info');
let content = document.getElementById('success')

function getInfo(e) {
    // e.preventDefault();
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    users.forEach(user => {
    if (username == user.username && password == user.password) {
            info.textContent = (username + " is logged in")
            let logged = true;

            if (logged = true) {
                content.textContent = ("Successful login, you can see this string now.")
            }
            return
        }   
    info.textContent = ("incorrect username or password")
});
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
