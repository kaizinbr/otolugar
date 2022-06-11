import Database from './database.js'
import seedUser from './data-login/seed.js'; 


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
        foto_perfil VARCHAR(70),
        bio VARCHAR(250),
        email VARCHAR(50) NOT NULL,
        avaliacao NUMERIC(3,2),
        sexo VARCHAR(25),
        senha VARCHAR(25) NOT NULL,
        perfil_id INTEGER NOT NULL,
        FOREIGN KEY (perfil_id) REFERENCES perfil (perfil_id)
      )`;

    const createPonto = `
      CREATE TABLE ponto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50) NOT NULL,
        descricao VARCHAR(250),
        avaliacao_usuario NUMERIC(3,2),
        endereco VARCHAR(100),
        valor NUMERIC(10,2),
        usuario_id INTEGER NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id)
      )`;

    const createReserva = `
      CREATE TABLE reserva_Ponto_TO_Usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data VARCHAR(10),
        descricao VARCHAR(250),
        usuario_id INTEGER NOT NULL,
        ponto_id INTEGER NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id),
        FOREIGN KEY (ponto_id) REFERENCES ponto (ponto_id)
      )`;
  
  try {
  db.run(createPerfil);
  db.run(createUsuario);
  db.run(createPonto);
  db.run(createReserva);
  seedUser.loadSeed();
  } catch (err) {
   console.err(err); 
  }
  
}

export default { up };