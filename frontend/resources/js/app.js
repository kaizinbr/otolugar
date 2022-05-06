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
    let body = document.querySelector('body');

    const chat = `<div class="chatWindow">
    <div class="chatFloat">
        <button class="hideChatBtn" onclick="hideChat()"><i class='bx bx-chevron-down'></i></button>
        <a href="chat.html">
            <i class='bx bxs-message-square-dots'></i>
            <span>Chat</span>
        </a>
            
        </div>
    </div>`;

    body.insertAdjacentHTML("beforeend", chat)
};

function hideChat (){
    let chat = document.querySelector(".chatWindow");
    console.log(chat);

    chat.classList.toggle("hide");

    console.log(chat.classList)
}