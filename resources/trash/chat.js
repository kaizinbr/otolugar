function putChat (){
    let html = document.querySelector('body');

    const chat = `<div class="chatWindow">
    <div class="chatFloat">
        <button class="hideChatBtn" onclick="hideChat()"><i class='bx bx-chevron-down'></i></button>
        <a href="chat.html">
            <i class='bx bxs-message-square-dots'></i>
            <span>Chat</span>
        </a>
            
        </div>
    </div>`;

    html.insertAdjacentHTML("beforeend", chat)
};

function hideChat (){
    let chat = document.querySelector(".chatWindow");
    console.log(chat);

    chat.classList.toggle("hide");

    console.log(chat.classList)
}