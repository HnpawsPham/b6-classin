let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

if(isLoggedIn){
    window.location.href = "../index.html";
}

let userList = JSON.parse(localStorage.getItem("userList")) || [];

function checkAccount(){
    let user = new User();
    user.getInfo();

    if(!user.checkPass()){
        return;
    }

    let res = userList.filter((elm) => elm.email == user.email && elm.password == user.password && elm.name == user.name) || [];
    console.log(res);

    if(res.length == 0){
        userList.push(user);
        localStorage.setItem("userList",JSON.stringify(userList));
        console.log(localStorage)

        window.location.href = "../pages/login.html";
        alert("Create new account successfully!");
    }
    else{
        window.location.href = "../pages/login.html";
        alert("This account is exist, please log in");
    }
}

export class User{
    name;
    email;
    password;
    confirmPass;
    role;

    constructor(){
        this.role = 0;
    }

    getInfo(){
        this.name = document.getElementById("username").value;
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("pass").value;
    }

    checkPass(){
        this.confirmPass = document.getElementById("confirm-pass").value;
        if(this.confirmPass == this.password){
            return true;
        }
        else{
            alert("Wrong confirm password!");
            return false;
        }
    }
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    checkAccount();
})