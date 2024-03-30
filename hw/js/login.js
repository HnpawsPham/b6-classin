import {User} from "./signup.js"
let userList = JSON.parse(localStorage.getItem("userList")) || [];

const form = document.getElementById("form");

function checkAccount(){
    let user = new User();
    user.getInfo();

    let res = userList.filter((elm) => elm.email == user.email && elm.password == user.password && elm.name == user.name);

    if(res.length == 0){
        window.location.href = "../pages/signup.html";
        alert("No account available or wrong typing!");
    }
    else{
        localStorage.setItem("isLoggedIn",true);
        window.location.href = "../index.html";
        alert("Log in succesfully!");
    }
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    checkAccount();
})
