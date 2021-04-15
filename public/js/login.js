let users = [{
        username: "Artur",
        password: "artur"
    },
    {
        username: "Dawid",
        password: "dawid"
    },
    {
        username: "jaro",
        password: "jaro"
    }
]
let logged = false;

let info = document.getElementById('info');
let content = document.getElementById('success')

function getInfo() {
    // e.preventDefault();
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            info.textContent = (username + " is logged in")
            let logged = true;

            if (logged = true) {
                content.textContent = ("Successful login, you can see this string now.")
            }
            return
        }
    }
    info.textContent = ("incorrect username or password")



//  i went back to the for loop because there were problems witch forEach

//     users.forEach(user => {
//     if (username == user.username && password == user.password) {
//             info.textContent = (username + " is logged in")
//             let logged = true;

//             if (logged = true) {
//                 content.textContent = ("Successful login, you can see this string now.")
//             }
//             return
//         }   
//     info.textContent = ("incorrect username or password")
// });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

let id_token = googleUser.getAuthResponse().id_token; // ID token for backend
        console.log("ID Token: " + id_token);
}








