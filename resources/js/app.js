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

function userIsAuth() {
	if (window.sessionStorage.getItem('user_id') && typeof window.sessionStorage.getItem('user_id') != 'undefined') return true;
	else return false;
}


async function verifyAuth() {
  const sign = document.getElementById('sign')
  const altura = window.innerHeight;
  const largura = window.innerWidth;
  
  if(userIsAuth() && largura >= 1080) {
    const url = `/get-user/id/${window.sessionStorage.getItem('user_id')}`;

      const user = (await (await fetch(url)).json())[0];
    
    const imgPerfil = user.foto_perfil ? user.foto_perfil : "/resources/img-main/profile_picture.svg" 
    
    sign.innerHTML = `<img class="imgPerfil" src="${imgPerfil}" alt="" onclick="window.location.href = '/perfil.html'">
              <p class="saudacao" onclick="window.location.href = '/perfil.html'">Olá, ${user.nome}!</p>
              <span class="material-symbols-outlined logout"
                onclick="logout()">
logout
</span>`
  }else if (window.sessionStorage.getItem('user_id') && largura < 1080) {
      const mobileAuth = document.querySelector('.mobile-auth');

    const url = `/get-user/id/${window.sessionStorage.getItem('user_id')}`;

      const user = (await (await fetch(url)).json())[0];
    
    const imgPerfil = user.foto_perfil ? user.foto_perfil : "/resources/img-main/profile_picture.svg" 

    
    mobileAuth.innerHTML = `<img class="imgPerfil" src="${imgPerfil}" alt="" onclick="window.location.href = '/perfil.html'">
              <p class="s
              audacao" onclick="window.location.href = '/perfil.html'">Olá, ${user.nome}!</p>`;

    const logout = `<li class="logout" onclick="logout()">Sair<span class="material-symbols-outlined logout">
logout
</span></li>`
    const lista = document.querySelector('.list');
    lista.insertAdjacentHTML('beforeend', logout);
  }
   else {
    const cadastro = '<li><a href="signinup.html" class="mobileSign">Cadastro/Login</a></li>';
    const lista = document.querySelector('.list');
    lista.insertAdjacentHTML('beforeend', cadastro);

    sign.innerHTML = `<a href="signinup.html">Cadastro/Login</a>`;

  }      

  
}

function checkPassword(){
  const inputSenha = document.querySelector("#senha");
  const spanDeErro = document.querySelector("#passwordError");
  const submit = document.querySelector(".submit");


  if(inputSenha.value.length < 6){
    spanDeErro.innerHTML = "A senha deve ter no mínimo 6 caracteres";
    submit.disabled = true;
    submit.classList.add("disabled");
  } else{
    spanDeErro.innerHTML = "";
    submit.disabled = false;
    submit.classList.remove("disabled");
  }

  // CHECA SE A SENHA TEM MAIS DE 20 CARACTERES
  if(inputSenha.value.length > 20){
    spanDeErro.innerHTML = "A senha deve ter no máximo 20 caracteres";
    submit.disabled = true;
    submit.classList.add("disabled");
  } 

  // CHECA SE A ULTIMA LETRA DIGITADA É UM CARACTERE ESPECIAL
  if(inputSenha.value.match(/[^a-zA-Z0-9]$/)){
    spanDeErro.innerHTML = "A senha deve não deve conter caracteres especiais";
    submit.disabled = true;
    submit.classList.add("disabled");
  }

  if (submit) {
    btnSignin.addEventListener("click", function () {
     body.className = "sign-in-js"; 
  });
  }


  // const confirmPassword = document.getElementById('confirmPassword');
  // const submit = document.getElementById('submit');
}

async function verifyEmpresarial(id) {
  const url = `/get-user/id/${id}`;
	
	const user = (await (await fetch(url)).json())[0];

	if(user.perfil_id == 1) return true;
	else return false;
}

function userIsAuth() {
	if (window.sessionStorage.getItem('user_id') && typeof window.sessionStorage.getItem('user_id') != 'undefined') return true;
	else return false;
}
