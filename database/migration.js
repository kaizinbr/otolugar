import Database from './database.js';


async function up() {
  const db = await Database.connect();

  const createPerfil = `
      CREATE TABLE perfil (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50) NOT NULL
      )`;

  const createUsuario = `
      CREATE TABLE usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50) NOT NULL,
        telefone VARCHAR(11),
        data_nascimento VARCHAR(10),
        foto_perfil VARCHAR(250),
        bio VARCHAR(250),
        email VARCHAR(50) NOT NULL,
        sexo VARCHAR(25),
        senha VARCHAR(25) NOT NULL,
        perfil_id INTEGER NOT NULL,
        FOREIGN KEY (perfil_id) REFERENCES perfil (perfil_id)
      )`;

    const createPonto = `
      CREATE TABLE ponto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50) NOT NULL,
        descricao VARCHAR(1500),
        imagem VARCHAR(250),
        altImagem VARCHAR(250),
        endereco VARCHAR(100),
        valor NUMERIC(10,2),
        usuario_id INTEGER,
        FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id)
      )`;
  
  try {
  await db.run(createPerfil);
  await db.run(createUsuario);
  await db.run(createPonto)
  } catch (err) {
   console.error(err); 
  }
  
}

export default { up };