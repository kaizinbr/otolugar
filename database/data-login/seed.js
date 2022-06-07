 import Database from '../database.js';

async function loadSeed() {
    const perfis = [
    {
      "id": 1,
      "nome": "profissional"
    },
    {
      "id": 2,
      "nome": "visitante"
    }             
   ]
  
    const novosUsers = [
      {
        "nome": "carlin",
       "telefone": "4002-8922",
       "data_nascimento": "19/06/2004",
       "foto_perfil": "https://instagram.fjpa14-1.fna.fbcdn.net/v/t51.2885-15/82212194_141076820717095_7007747681815825815_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fjpa14-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=T5XeIEBz4AIAX_cTVAd&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjIyOTQzMjk1OTEzMDQ4NDg0Mg%3D%3D.2-ccb7-5&oh=00_AT_hsl--qj8ydaj0HLqbomPTdfeOeP8J25ZC2ug64zb0Dg&oe=62922DE4&_nc_sid=30a2ef",
       "bio": "Lorem aleatório pra teste",
       "email": "carlosandre116@gmail.com",
       "sexo": "masculino",
       "senha": "cavalo",
       "perfil_id": 1
      }
    ];
    // Necessário mecanismo para criar perfil, depois de criar user (que consiga ligar id de perfil com user, claro)!
  for ( const perfil of perfis) {
        await createPerfil(perfil)
    };
  
  for ( const user of novosUsers) {
        await create(user)
    };
};

async function createPerfil(perfil) {
    const db = await Database.connect();
    
    const {nome} = perfil;

    const perfilSQL = `
      INSERT INTO
        perfil (nome)
      VALUES
        (?)
    `;

    let lastID = await db.run(perfilSQL, [nome]);
}

async function create(user) {
   const db = await Database.connect();
  const {nome, email, senha, perfil_id} = user;
  

    if (!(verifyEmail(email))) {
      const usuarioSQL = `
        INSERT INTO
          usuario (nome, email, senha, perfil_id)
        VALUES
          (?, ?, ?, ?)
      `;
  
      let {lastID} = await db.run(usuarioSQL, [nome, email, senha, perfil_id]);
  
      return lastID;
    } else {
      return {"status": "Já possui uma conta com esse email!"}
    }

    
    
};

async function verifyEmail(email) {
  const db = await Database.connect();

    const EmailSQL = `
      SELECT
        email
      FROM
        usuario
    `;
  
  const emails = await db.all(EmailSQL);

  
  const response = emails.find(DBEmail =>  email == DBEmail.email);

  console.log(response);
  
  return response;
}

async function readAll(){
  const db = await Database.connect();

  const selectUserSQL = `
    SELECT
      *
    FROM
      usuario
    `;

  const usuarios = await db.all(selectUserSQL);
  
  
    return usuarios;
};

function readByNome(nome) {
    const user = (users.filter(user => (user.nome).toLowerCase().includes(nome.toLowerCase())));

    if (user[0] === undefined) {
        return undefined;
    } else {
        return user;
    }
}

function readById(id) {
    const response = (users.find(user => user.id == id));

    if (response) {
        return response;
    } else {
        return undefined;
    }
}

function auth(login, senha) {
  const response = (users.find(user => user.email == login));

  if (response) {
    return (response.senha == senha);
  }
}

export default {create, readAll, loadSeed, readByNome, readById, auth}