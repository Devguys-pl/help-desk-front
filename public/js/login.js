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

function getInfo() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    //=================== WAY WITH forEach ========================

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


//================== WAY WITH for ==========================

    // for (let i = 0; i < users.length; i++) {
    //     if (username == users[i].username && password == users[i].password) {
    //         info.textContent = (username + " is logged in")
    //         let logged = true;

    //         if (logged = true) {
    //             content.textContent = ("Successful login, you can see this string now.")
    //         }
    //         return
    //     }
    // }
    // info.textContent = ("incorrect username or password")
}