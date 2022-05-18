var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

function putChat (){
    let html = document.querySelector('body');

    const chat = ``;

    html.insertAdjacentHTML("beforeend", chat)
};

function hideChat (){
    let chat = document.querySelector(".chatWindow");
    console.log(chat);

    chat.classList.toggle("hide");

    console.log(chat.classList)
}