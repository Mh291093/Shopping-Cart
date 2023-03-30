let userName = document.querySelector("#username");
let password = document.querySelector("#password");

let loginBtn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function(){
    if(userName.value === "" || password.value === "") {
        alert("please fill data");
    } else {
        if(
            getUser &&
            getUser.trim() === userName.value.trim() &&
            getPassword &&
            getPassword === password.value
        ) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1500);
        } else {
            console.log("incorrect");
        }
    }
});
