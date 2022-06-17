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
    sign.innerHTML = `<a href="signinup.html">Cadastro/Login</a>`
  }           
}

function checkPassword(){
  const inputSenha = document.querySelector("#senha");
  const spanDeErro = document.querySelector("#passwordError");
  const submit = document.querySelector(".submit");

  console.log('achei a senha');

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
