let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logOutBtn = document.querySelector("#logout");

let userName = localStorage.getItem("username");
if(userName) {
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = userName;
};

logOutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500);
});

