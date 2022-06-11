var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

if (btnSignin) {
  btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});
}

if (btnSignup) {
  btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});
}

function logout() {
    window.sessionStorage.removeItem('user_id')
    window.location.href = "/"
}


async function verifyAuth() {
  const sign = document.getElementById('sign')
  
  if(window.sessionStorage.getItem('user_id')) {
    const url = `/get-user/id/${window.sessionStorage.getItem('user_id')}`;

      const user = (await (await fetch(url)).json())[0];
    
    const imgPerfil = user.foto_perfil ? user.foto_perfil : "/resources/img-main/profile_picture.svg" 
    
    sign.innerHTML = `<img class="imgPerfil" src="${imgPerfil}" alt="" onclick="window.location.href = '/perfil.html'">
              <p class="saudacao" onclick="window.location.href = '/perfil.html'">Olá, ${user.nome}!</p>
              <span class="material-symbols-outlined logout"
                onclick="logout()">
logout
</span>`
  } else {
    sign.innerHTML = `<a href="main-cadastro-login.html">Cadastro/Login</a>`
  }           
}

